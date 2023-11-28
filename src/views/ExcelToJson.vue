<template>
    <v-container class="excel-to-json">
        <v-row justify="space-between">
            <v-col :cols="8">
                <v-file-input label="File input" variant="outlined" v-model="input"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    density="compact"></v-file-input>
            </v-col>
            <v-col :cols="2">
                <v-select label="Extract Type" v-model="extractType" :items="['simple', 'table', 'dynamic']"
                    variant="outlined" density="compact" hide-details></v-select>
            </v-col>
            <v-col :cols="2">
                <v-btn rounded="sm" @click="loadExcelData"> Extract </v-btn>
            </v-col>
        </v-row>
        <v-divider class="mb-4"></v-divider>
        <v-row>
            <!-- <v-col cols="12">
                <div class="d-flex flex-wrap ga-3 justify-end">
                    <v-btn size="small" rounded="sm" @click="copyToClipboard"> Copy </v-btn>
                </div>
            </v-col> -->
            <v-col cols="12">
                <MonacoEditor id="output" theme="vs-dark" :options="options" language="json" width="100%" :height="600"
                    v-model:value="output">
                </MonacoEditor>
            </v-col>
        </v-row>

    </v-container>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue'
import { clipboard } from 'electron'
import { extractExcel } from '@/utils/excel-utils';
import MonacoEditor from '@/components/code-editor/MonacoEditor.vue'

const input = ref<File[]>([]);
const output = ref<string>();
const extractType = ref<string>('simple');

const options = {
    colorDecorators: true,
    lineHeight: 24,
    tabSize: 2,
}

const excelConfig = {
    extractType: '',
    ignoreValue: ["-"],
    fixedRow: [{
        row: 1,
        position: 2,
        key: "sheetKey"
    }],
    tables: [{
        key: "table1",
        title: "Table1",
        cols: [{
            fromKey: "ID",
            toKey: "id"
        },
        {
            fromKey: "Name",
            toKey: "name"
        },
        {
            fromKey: "Address",
            toKey: "address"
        }]
    }, {
        key: "table2",
        title: "Table2",
        cols: [{
            fromKey: "ID",
            toKey: "id"
        },
        {
            fromKey: "Name",
            toKey: "name"
        },
        {
            fromKey: "Address",
            toKey: "address"
        }]
    }]
}

function copyToClipboard() {

}

async function loadExcelData() {
    console.log(input.value);
    if (input.value.length > 0) {
        const file = input.value[0];
        excelConfig.extractType = extractType.value;
        const data = await extractExcel(file, excelConfig);
        output.value = JSON.stringify(data, null, 4);
    }
}

</script>