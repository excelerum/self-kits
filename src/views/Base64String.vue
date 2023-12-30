<template>
    <v-container class="base64-string">
        <v-row>
            <v-col>
                <div class="d-flex justify-space-between">
                    <div class="d-flex flex-wrap ga-3">
                        <span>Shortcut</span>
                        <v-btn size="small" rounded="sm" @click="exampleData"> Example </v-btn>
                        <v-btn size="small" rounded="sm" @click="clearData"> Clear </v-btn>
                    </div>
                    <div>
                        <v-radio-group inline density="compact" v-model="functionType">
                            <v-radio label="Encode" value="encode"></v-radio>
                            <v-radio label="Decode" value="decode"></v-radio>
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
                    <v-btn size="small" rounded="sm" @click="copyToClipboard(output)"> Copy </v-btn>
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
import { copyToClipboard } from '@/utils/command-utils';

export default defineComponent({
    name: 'Base64String',
    setup() {
        const input = ref<string | null>(null);
        const output = ref<string | null>(null);
        const functionType = ref<string>('encode');

        return {
            functionType,
            input,
            output,
            errorMessage: '',
        }
    },
    methods: {
        delay: debounce(function (value: string, callback: Function) {
            callback(value)
        }, 500),
        exampleData: function () {
            this.input = "This is example"
        },
        clearData: function () {
            this.input = null;
            this.output = null;
        },
        copyToClipboard: copyToClipboard,
        execute: function () {
            try {
                const data = this.input || "";
                if (this.functionType === "encode") {
                    this.output = btoa(data);
                } else {
                    this.output = atob(data);
                }
                this.errorMessage = '';
            } catch (error: any) {
                this.errorMessage = error.message;
                console.error(error)
            }
        }
    },
    watch: {
        input: {
            handler: function (val) {
                this.delay(val, (value: string) => {
                    this.execute();
                })
            },
            deep: true
        },
        functionType: {
            handler: function (val) {
                this.execute();
            },
            deep: true
        },
    },
})

</script>