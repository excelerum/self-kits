<template>
    <v-container class="base64-string">
        <v-row>
            <v-col>
                <div class="d-flex justify-space-between">
                    <div class="d-flex flex-wrap ga-3">
                        <span>Shortcut</span>
                        <v-btn size="small" rounded="sm" @click="exampleData"> Example </v-btn>
                        <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
                    </div>
                    <div>
                        <v-radio-group inline density="compact" v-model="functionType">
                            <v-radio label="Escape" value="escape"></v-radio>
                            <v-radio label="Unescape" value="unescape"></v-radio>
                        </v-radio-group>
                    </div>
                </div>
                <v-textarea label="Input" variant="outlined" rows="10" v-model="input"></v-textarea>
            </v-col>
        </v-row>
        <v-divider class="mb-4"></v-divider>
        <v-row>
            <v-col cols="12">
                <div class="d-flex flex-wrap ga-3 justify-end">
                    <v-btn size="small" rounded="sm" @click="copyToClipboard"> Copy </v-btn>
                </div>
            </v-col>
            <v-col cols="12">
                <v-textarea label="Output" variant="outlined" rows="10" v-model="output"></v-textarea>
            </v-col>
        </v-row>

    </v-container>
</template>
  
<script lang="ts">
import debounce from 'debounce';
import { defineComponent, ref } from 'vue'
import { clipboard } from 'electron';
import { addSlashes, removeSlashes } from 'slashes';

export default defineComponent({
    name: 'BackslashEscapeUnescape',
    setup() {
        const input = ref<string | null>(null);
        const output = ref<string | null>(null);
        const functionType = ref<string>('escape');

        return {
            functionType,
            input,
            output,
            errorMessage: ''
        }
    },
    methods: {
        delay: debounce(function (value: string, callback: Function) {
            callback(value)
        }, 500),
        exampleData: function () {
            this.input = "This is example"
        },
        copyToClipboard: function () {
            const tmp = this.output || "";
            clipboard.writeText(tmp);
        },
        processingInput: function () {
            const data = this.input || "";
            if (this.functionType === "escape") {
                this.output = addSlashes(data);
            } else {
                this.output = removeSlashes(data);
            }
        }
    },
    watch: {
        input: {
            handler: function (val) {
                this.delay(val, (value: string) => {
                    try {
                        this.processingInput();
                        this.errorMessage = '';
                    } catch (error: any) {
                        this.errorMessage = error.message;
                        console.error(error)
                    }
                })
            },
            deep: true
        },
        functionType: {
            handler: function (val) {
                setTimeout(() => {
                    this.processingInput();
                }, 100);
            },
            deep: true,
        }
    },
})

</script>