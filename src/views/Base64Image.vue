<template>
    <v-container class="base64-image">
        <v-row>
            <v-col cols="6">
                <div class="d-flex justify-space-between">
                    <div class="d-flex flex-wrap ga-3">
                        <span class="text-medium-emphasis">Shortcut</span>
                        <v-btn size="small" rounded="sm" @click="clearData"> Clear </v-btn>
                        <v-btn size="small" rounded="sm" @click="exampleData"> Example </v-btn>
                        <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
                    </div>
                    <div>
                        <v-btn prepend-icon="mdi-content-copy" size="small" rounded="sm">Copy</v-btn>
                    </div>
                </div>
                <div class="mt-3">
                    <v-textarea class="base64-input" label="Input" variant="outlined" v-model="input"></v-textarea>
                </div>
            </v-col>
            <v-divider class="" vertical></v-divider>
            <v-col cols="6">
                <div class="d-flex justify-space-between">
                    <span class="text-medium-emphasis">Image</span>
                    <div class="d-flex flex-wrap ga-3 ">
                        <v-btn size="small" rounded="sm"> Clear </v-btn>
                        <v-btn size="small" rounded="sm" @click="downloadImage"> Dowwnload </v-btn>
                        <v-btn size="small" rounded="sm" @click="copyToClipboard"> Copy </v-btn>
                    </div>
                </div>
                <div class="pa-4 d-flex" style="height: 83vh;">
                    <div v-if="imageBytes" class="align-self-center">
                        <img class="image-preview" v-bind:src="'data:image/jpeg;base64,' + imageBytes" />
                    </div>
                </div>
            </v-col>
        </v-row>

    </v-container>
</template>
  
<script lang="ts">
import debounce from 'debounce';
import { defineComponent, ref } from 'vue'
import { clipboard } from 'electron';
const IMAGE_BASE64_PREFIX = "data:image/png;base64,";

export default defineComponent({
    name: 'Base64String',
    setup() {
        const input = ref<string | null>(null);
        const imageBytes = ref<string | null>(null);

        return {
            input,
            errorMessage: '',
            imageBytes
        }
    },
    methods: {
        delay: debounce(function (value: string, callback: Function) {
            callback(value)
        }, 1000),
        exampleData: function () {
            this.input = ""
        },
        copyToClipboard: function () {
            const imageSrc = this.imageBytes || "";
            if (imageSrc) {
                clipboard.writeText(IMAGE_BASE64_PREFIX + imageSrc);
            }
        },
        downloadImage: function () {
            const imageSrc = this.imageBytes || "";
            if (imageSrc) {
                const a = document.createElement("a"); //Create <a>
                a.href = IMAGE_BASE64_PREFIX + imageSrc; //Image Base64 Goes here
                a.download = "example.png"; //File name Here
                a.click(); //Downloaded file
            }
        },
        clearData: function () {
            this.input = null;
            this.imageBytes = null;
        }
    },
    watch: {
        input: {
            handler: function (val) {
                this.delay(val, (value: string) => {
                    try {
                        if (value) value = value.replace(IMAGE_BASE64_PREFIX, "");
                        this.imageBytes = value;
                        this.errorMessage = '';
                    } catch (error: any) {
                        this.errorMessage = error.message;
                        console.error(error)
                    }
                })
            },
            deep: true
        }
    },
})

</script>

<style lang="scss">
.base64-input {
    .v-field__input {
        height: 80vh;
    }
}

.image-preview {
    width: 100%;
    height: auto;
}
</style>