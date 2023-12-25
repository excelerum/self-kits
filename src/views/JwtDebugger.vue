<template>
  <v-container class="base64-image">
    <v-row>
      <v-col cols="7">
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-wrap ga-3">
            <span class="text-overline text-medium-emphasis">Shortcut</span>
            <v-btn size="small" rounded="sm" @click="clearData"> Clear </v-btn>
            <v-btn size="small" rounded="sm" @click="exampleData"> Example </v-btn>
            <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
          </div>
          <div style="width: 120px">
            <v-select
              label="Algorithm"
              v-model="algorithm"
              :items="algorithmType"
              variant="outlined"
              density="compact"
              hide-details
            ></v-select>
          </div>
          <div class="">
            <v-btn size="small" prepend-icon="mdi-content-copy" rounded="sm" @click="copyToClipboard">Copy</v-btn>
          </div>
        </div>
        <div class="mt-3">
          <v-textarea class="base64-input" label="Token" variant="outlined" v-model="input" hide-details></v-textarea>
          <div class="mt-4">
            <v-alert
              v-if="isValidSignature === true"
              text="Signature Verified"
              type="success"
              variant="outlined"
            ></v-alert>
            <v-alert
              v-else-if="isValidSignature === false"
              text="Invalid Signature"
              type="error"
              variant="outlined"
            ></v-alert>
          </div>
        </div>
      </v-col>
      <v-divider class="" vertical></v-divider>
      <v-col cols="5">
        <div>
          <div class="d-flex justify-space-between">
            <span class="text-overline text-medium-emphasis">Decoded</span>
          </div>
          <div class="mt-3">
            <v-textarea label="Header" variant="outlined" rows="8" v-model="header" hide-details></v-textarea>
          </div>
        </div>
        <v-divider class="my-4"></v-divider>
        <div>
          <v-textarea label="Payload" variant="outlined" rows="8" v-model="payload" hide-details></v-textarea>
          <div v-if="expirationTime" class="mt-2">Expiration Time: {{ expirationTime }}</div>
          <div v-if="issuesAt" class="mt-2">Issued At: {{ issuesAt }}</div>
        </div>
        <v-divider class="my-4"></v-divider>
        <div>
          <div class="mb-2 text-overline">Signature:</div>
          <div>{{ renderEncryptFunc(algorithm) }} (</div>
          <div class="ml-8">base64UrlEncode(header) + "." +</div>
          <div class="ml-8">base64UrlEncode(payload),</div>
          <div v-if="isHSAlgorithm">
            <v-text-field
              class="mt-2 ml-8"
              variant="outlined"
              v-model.trim="signature"
              density="compact"
              hide-details
              style="width: 70%"
            ></v-text-field>
            <div class="d-flex align-center">
              <div>)</div>
              <div>
                <v-checkbox
                  class="secret-checkbox"
                  label="secret base64 encoded"
                  v-model:model-value="isSecretBase64Encoded"
                  hide-details
                ></v-checkbox>
              </div>
            </div>
          </div>
          <div v-else>
            <v-textarea
              class="mt-2 ml-8"
              variant="outlined"
              hide-details
              style="width: 70%"
              v-model:model-value="publicKey"
              rows="3"
            ></v-textarea>
            <v-textarea
              class="mt-2 ml-8"
              variant="outlined"
              hide-details
              style="width: 70%"
              v-model:model-value="privateKey"
              rows="3"
            ></v-textarea>
            <div>)</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import debounce from 'debounce'
  import { defineComponent, ref } from 'vue'
  import { clipboard } from 'electron'
  import jwt from 'jsonwebtoken'

  const MAPPING_TYPE = Object.freeze({
    HS256: 'HMACSHA256',
    HS384: 'HMACSHA384',
    HS512: 'HMACSHA512',
    RS256: 'RSASHA256',
    RS384: 'RSASHA384',
    RS512: 'RSASHA512',
    PS256: 'ECDSASHA256',
    PS384: 'ECDSASHA384',
    PS512: 'ECDSASHA512',
    ES256: 'RSAPSSSHA256',
    ES384: 'RSAPSSSHA384',
    ES512: 'RSAPSSSHA512'
  })

  export default defineComponent({
    name: 'JWTDebugger',
    setup() {
      const input = ref<string | null>(null)
      const isValidSignature = ref<boolean | null>(null)
      const header = ref<string | null>(null)
      const payload = ref<string | null>(null)
      const algorithm = ref<string>('HS256')
      const issuesAt = ref<string | null>(null)
      const expirationTime = ref<string | null>(null)
      const ignoreUpdate = ref<boolean>(false)
      // For HS
      const signature = ref<string | null>('your-256-bit-secret')
      const isSecretBase64Encoded = ref<boolean>(false)
      // For RSA
      const publicKey = ref<string | null>(null)
      const privateKey = ref<string | null>(null)
      const isHSAlgorithm = ref<boolean>(true)

      return {
        input,
        isValidSignature,
        header,
        payload,
        signature,
        algorithm,
        isSecretBase64Encoded,
        issuesAt,
        expirationTime,
        ignoreUpdate,
        publicKey,
        privateKey,
        isHSAlgorithm,
        algorithmType: Object.keys(MAPPING_TYPE)
      }
    },
    methods: {
      delay: debounce(function (value: string, callback: Function) {
        callback(value)
      }, 500),
      exampleData: function () {
        this.input =
          'eyJhbDFnIjoiSFMyNTYiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.DKTodl52ESV_0fr7MMGga7d6hr8mf14HCtLkQ5HONHE'
      },
      copyToClipboard: function () {
        const token = this.input
        if (token) {
          clipboard.writeText(token)
        }
      },
      clearData: function () {
        this.input = null
        this.header = null
        this.payload = null
        this.isValidSignature = null
        this.issuesAt = null
        this.expirationTime = null
      },
      bindTokenData: function (decoded: any) {
        if (!decoded) {
          this.header = null
          this.payload = null
          return
        }
        const { header, payload } = decoded
        this.header = JSON.stringify(header, null, 4)
        this.payload = JSON.stringify(payload, null, 2)
        if (payload && payload.iat) {
          this.issuesAt = new Date(payload.iat * 1000).toJSON()
        }
        if (payload && payload.exp) {
          this.expirationTime = new Date(payload.exp * 1000).toJSON()
        }
        if (header && header.alg) {
          this.algorithm = header.alg
        }
      },
      signJWT: function (signature: string | Buffer, ignoreUpdate?: boolean) {
        try {
          if (!this.payload) {
            return
          }
          const algorithm = this.algorithm;
          const token = jwt.sign(this.payload, signature, { algorithm })
          this.ignoreUpdate = ignoreUpdate === true ? true : false
          this.input = token
        } catch (error: any) {
          this.isValidSignature = false
          console.error(error)
        }
      },
      renderEncryptFunc: function (key: string): string {
        return (MAPPING_TYPE as any)[key] || ''
      }
    },
    watch: {
      input: {
        handler: function (val) {
          if (this.ignoreUpdate) {
            // Ignore call update
            this.ignoreUpdate = false
            return
          }
          this.delay(val, (token: string) => {
            try {
              if (!token || token.trim().length === 0) {
                this.isValidSignature = null
                this.header = null
                this.payload = null
                return
              }
              let decoded = null
              if (!this.signature || this.signature === 'your-256-bit-secret') {
                decoded = jwt.decode(token, { complete: true })
              } else {
                decoded = jwt.verify(token, this.signature, { complete: true })
              }
              this.bindTokenData(decoded)
              this.isValidSignature = true
            } catch (error: any) {
              this.isValidSignature = false
              // Extract data
              this.bindTokenData(jwt.decode(token, { complete: true }))
            }
          })
        },
        deep: true
      },
      signature: {
        handler: function (val) {
          this.delay(val, (signature: string) => {
            if (!signature || signature.trim().length === 0 || !this.input) {
              this.isValidSignature = null
              return
            }
            const secret = this.isSecretBase64Encoded ? Buffer.from(signature, 'base64') : signature
            this.signJWT(secret)
          })
        },
        deep: true
      },
      isSecretBase64Encoded: {
        handler: function (isEncoded: boolean) {
          if (!this.signature || this.signature.trim().length === 0 || !this.input) {
            this.isValidSignature = null
            return
          }
          const secret = isEncoded ? Buffer.from(this.signature, 'base64') : this.signature
          this.signJWT(secret)
        },
        deep: true
      },
      algorithm: {
        handler: function (algorithm: string) {
          this.isHSAlgorithm = algorithm && algorithm.includes('HS') ? true : false
          if (!this.signature || this.signature.trim().length === 0 || !this.input) {
            this.isValidSignature = null
            return
          }
          const secret = this.isSecretBase64Encoded ? Buffer.from(this.signature, 'base64') : this.signature
          this.signJWT(secret)
        },
        deep: true
      },
      payload: {
        handler: function (val) {
          this.delay(val, (payload: string) => {
            if (!this.signature || this.signature.trim().length === 0 || !payload) {
              this.isValidSignature = null
              return
            }
            const secret = this.isSecretBase64Encoded ? Buffer.from(this.signature, 'base64') : this.signature
            this.signJWT(secret)
          })
        },
        deep: true
      }
    }
  })
</script>

<style lang="scss">
  .base64-input {
    .v-field__input {
      height: 70vh;
    }
  }
  .secret-checkbox {
    --v-input-control-height: 40px;
  }

  .v-text-field.v-text-field--solo .v-input__control {
    min-height: 10px;
  }
</style>
