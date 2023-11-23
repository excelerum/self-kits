<template>
  <v-container class="">
    <v-row class="">
      <v-col :cols="6">
        <MonacoEditor id="input" theme="vs-dark" :options="options" language="plaintext" width="100%" :height="600"
          v-model:value="input">
        </MonacoEditor>
      </v-col>

      <v-col :cols="6">
        <div>
          <MonacoEditor id="output" theme="vs-dark" :options="options" language="json" width="100%" :height="600"
            v-model:value="output">
          </MonacoEditor>
        </div>
        <div class="mt-2">
          <v-text-field label="Query" variant="solo-filled"></v-text-field>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import MonacoEditor from '@/components/code-editor/MonacoEditor.vue';
import debounce from 'debounce';

export default {
  name: "JsonFormat",
  components: {
    MonacoEditor,
  },
  data() {
    return {
      options: {
        colorDecorators: true,
        lineHeight: 24,
        tabSize: 2,
        minimap: { enabled: false },
      },
      input: 'This is example',
      output: ''
    };
  },
  watch: {
    input: {
      handler: function (val, oldVal) {
        console.log(val);
        console.log(oldVal);
        this.output = JSON.parse(val);
        this.formatJSON(val);
      },
      deep: true
    }
  },
  methods: {
    formatJSON: debounce(function (value) {
      try {
        console.log(value);
      } catch (error) {
        console.error(error);
      }
    }, 500)
  }
}
</script>
