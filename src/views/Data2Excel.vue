<template>
    <v-container class="data-to-excel">
        <v-stepper alt-labels :items="['Input', 'Process Data', 'Output']">
            <template v-slot:item.1>
                <v-card flat>
                    <v-row class="mt-0">
                        <v-col cols="12">
                            <v-select label="Input Method" :items="inputTypeOp" density="compact" variant="outlined"
                                v-model="inputType"></v-select>
                        </v-col>
                        <v-col v-if="inputType === 'rawData'">
                            <MonacoEditor id="input" theme="vs-dark" :options="options" language="json" width="100%"
                                :height="400" v-model:value="input">
                            </MonacoEditor>
                        </v-col>
                        <v-col v-if="inputType === 'file'">
                            FILE
                        </v-col>
                        <v-col v-if="inputType === 'url'">
                            URL
                        </v-col>
                    </v-row>
                </v-card>
            </template>

            <template v-slot:item.2>
                <v-card title="Step Two" flat>...</v-card>
            </template>

            <template v-slot:item.3>
                <v-card title="Step Three" flat>...</v-card>
            </template>
        </v-stepper>
    </v-container>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import MonacoEditor from '@/components/code-editor/MonacoEditor.vue'

const options = {
    colorDecorators: true,
    lineHeight: 24,
    tabSize: 2,
}

const inputTypeOp = [{
    value: 'rawData',
    title: 'RAW Data'
}, {
    value: 'file',
    title: 'Choose File'
}, {
    value: 'url',
    title: 'Fetch URL'
}]

const inputType = ref<string>("rawData");
const input = ref<string>();

watch(inputType,
    (value) => {
        console.log(value);
    })


</script>