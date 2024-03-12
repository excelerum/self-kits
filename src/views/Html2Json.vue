<template>
  <v-container class="html2json">
    <v-row class="">
      <v-col :cols="6">
        <div class="d-flex flex-wrap ga-3 justify-space-between">
          <div>
            <span class="text-medium-emphasis">Shortcut: </span>
          </div>
          <div class="d-flex flex-wrap ga-3">
            <v-btn size="small" rounded="sm" @click="generateExample"> Example </v-btn>
            <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
          </div>
        </div>
        <div class="my-3">
          <MonacoEditor
            id="input"
            theme="vs-dark"
            :options="options"
            language="html"
            width="100%"
            :height="600"
            v-model:value="input"
          >
          </MonacoEditor>
          <div class="mt-2">
            <v-sheet class="pa-2" v-if="errorMessage" :height="80" color="error">{{ errorMessage }}</v-sheet>
          </div>
        </div>
      </v-col>

      <v-col :cols="6">
        <div class="d-flex flex-wrap ga-3 justify-end">
          <v-btn size="small" rounded="sm" @click="copyToClipboard(output)"> Copy </v-btn>
          <!-- <v-select class="output-space" label="Space" :items="[1, 2, 3, 4]" variant="outlined" :model-value="space"
            density="compact" style="width: 20px"></v-select> -->
          <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
        </div>
        <div class="my-3">
          <MonacoEditor
            id="output"
            theme="vs-dark"
            :options="options"
            language="json"
            width="100%"
            :height="600"
            v-model:value="output"
          >
          </MonacoEditor>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import MonacoEditor from '@/components/code-editor/MonacoEditor.vue'
  import debounce from 'debounce'
  import { copyToClipboard } from '@/utils/command-utils'
  import { HTMLToJSON } from 'html-to-json-parser'
  import { Tabletojson } from '@/utils/html-utils'

  export default {
    name: 'JsonFormat',
    components: {
      MonacoEditor
    },
    data() {
      return {
        options: {
          colorDecorators: true,
          lineHeight: 24,
          tabSize: 2,
          minimap: { enabled: false }
        },
        input: '',
        output: '',
        space: 2,
        isValidInput: false,
        errorMessage: '',
        query: '',
        tempOutput: ''
      }
    },
    watch: {
      input: {
        handler: function (val) {
          this.formatJSON(val, async (value: string) => {
            try {
              let result = ''
              if (value && value.includes('<table')) {
                result = Tabletojson.convert(value) as any
                console.log(result)
              } else {
                const tmp = await HTMLToJSON(value, true) as string;
                result = JSON.parse(tmp);
              }
              this.output = val ? JSON.stringify(result, null, this.space) : ''
              this.tempOutput = this.output
              this.isValidInput = true
              this.errorMessage = ''
            } catch (error: any) {
              this.isValidInput = false
              this.errorMessage = error.message
            }
          })
        },
        deep: true
      }
    },
    methods: {
      formatJSON: debounce(function (value: string, callback: Function) {
        callback(value)
      }, 500),
      generateExample: function () {
        this.input = JSON.stringify(
          {
            employees: {
              employee: [
                {
                  id: '1',
                  firstName: 'Tom',
                  lastName: 'Cruise',
                  photo: 'https://jsonformatter.org/img/tom-cruise.jpg'
                },
                {
                  id: '2',
                  firstName: 'Maria',
                  lastName: 'Sharapova',
                  photo: 'https://jsonformatter.org/img/Maria-Sharapova.jpg'
                },
                {
                  id: '3',
                  firstName: 'Robert',
                  lastName: 'Downey Jr.',
                  photo: 'https://jsonformatter.org/img/Robert-Downey-Jr.jpg'
                }
              ]
            }
          },
          null,
          2
        )
      },
      copyToClipboard: copyToClipboard
    }
  }
</script>

<style lang="scss" scoped></style>
