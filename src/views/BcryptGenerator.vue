<template>
  <v-container class="bcrypt-generator">
    <v-row class="ma-2">
      <v-col>
        <div class="d-flex flex-wrap ga-3">
          <div class="text-medium-emphasis">Shortcut:</div>
          <v-btn size="small" rounded="sm" @click="onLoadClipboardInput"> Clipboard </v-btn>
          <v-btn size="small" rounded="sm" @click="onClearInput"> Clear </v-btn>
          <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col :cols="6">
        <v-text-field
          label="Input"
          variant="outlined"
          density="compact"
          v-model.trim="input"
          :loading="isEncrypting"
        ></v-text-field>
      </v-col>
      <v-col :cols="4">
        <v-text-field label="Round" variant="outlined" density="compact" v-model.number="encryptRound"></v-text-field>
      </v-col>
      <v-col :cols="2"><v-btn rounded="sm" @click="onEncrypt"> Encode </v-btn></v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-2">
      <v-col :cols="6">
        <v-text-field
          label="Output"
          variant="outlined"
          density="compact"
          v-model="output"
          append-inner-icon="mdi-content-copy"
          single-line
          hide-details
          @click:append-inner="onCopyOutput"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import bcrypt from 'bcryptjs'
  import { clipboard } from 'electron'

  const input = ref<string | null>(null)
  const output = ref<string | null>(null)
  const encryptRound = ref<number>(12)
  const isEncrypting = ref<boolean>(false)

  function onEncrypt() {
    const hashValue = input.value
    if (hashValue) {
      isEncrypting.value = true
      setTimeout(() => {
        output.value = bcrypt.hashSync(hashValue, encryptRound.value)
        isEncrypting.value = false
      }, 1000)
    }
  }

  function onCopyOutput() {
    const outputVal = output.value
    if (outputVal) {
      clipboard.writeText(outputVal)
    }
  }

  function onLoadClipboardInput() {
    const inputVal = clipboard.readText()
    if (inputVal) {
      input.value = inputVal
    }
  }

  function onClearInput() {
    input.value = null
    output.value = null
  }
</script>
