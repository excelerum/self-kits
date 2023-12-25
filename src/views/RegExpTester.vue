<template>
    <v-container class="regexp">
        <v-row>
            <v-col cols="7">
                <!-- <div class="d-flex justify-end">
                    <v-btn icon="mdi-cog" size="small" rounded="sm" density="comfortable" />
                </div> -->
                <div class="mt-2">
                    <v-text-field label="Regular Expression" variant="outlined" density="comfortable"
                        append-inner-icon="mdi-content-copy"
                        @click:append-inner="(_$event: any) => copyToClipboard(null)"></v-text-field>
                </div>
                <div class=" mt-2">
                    <v-textarea label="Test String" variant="outlined" rows="10"></v-textarea>
                </div>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col cols="5">
                <v-expansion-panels multiple v-model="activePanels" class="ref-panel">
                    <v-expansion-panel title="Explanation">
                        <v-expansion-panel-text>
                            An explanation of your regex will be automatically generated as you type.
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Match Information">
                        <v-expansion-panel-text>
                            Detailed match information will be displayed here automatically.
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Quick Reference">
                        <v-expansion-panel-text class="quick-reference-panel">
                            <v-row>
                                <v-col cols="5">
                                    <v-text-field label="Search reference" class="" density="compact" variant="solo-filled"
                                        prepend-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
                                    <v-list density="compact" class="reference-items">
                                        <v-list-item v-for="(item, i) in REFERENCE_ITEMS" :key="item.key" :value="item.key"
                                            color="primary" @click="onSelectReference(item.key)">
                                            <template v-slot:prepend>
                                                <v-icon :icon="item.icon" size="x-small"></v-icon>
                                            </template>

                                            <v-list-item-title v-text="item.text"></v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-divider vertical></v-divider>
                                <v-col cols="7" class="reference-child-right-panel">
                                    <v-list density="compact" class="reference-child-items">
                                        <v-list-item v-for="refChild in referenceChildItems" :key="refChild.text"
                                            :value="refChild.key" :title="refChild.text" class="px-2">
                                            <template v-slot:append>
                                                <span>{{ refChild.shortcut }}</span>
                                            </template>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>

                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss">
.reference-items {
    .v-list-item__prepend>.v-icon~.v-list-item__spacer {
        width: 8px;
    }
}

.reference-child-items {
    padding-top: 0;
}

.quick-reference-panel {
    .v-expansion-panel-text__wrapper {
        padding: 12px;
    }

    .reference-child-right-panel {
        max-height: 500px;
        overflow: auto;
    }
}

.ref-panel {
    .v-expansion-panel--active>.v-expansion-panel-title:not(.v-expansion-panel-title--static) {
        min-height: 24px;
    }
}
</style>

<script lang="ts" setup>
import { copyToClipboard } from '@/utils/command-utils';
import { REFERENCE_ITEMS } from '@/utils/constants';
import { ref } from 'vue';

const activePanels = ref<number[]>([0, 1, 2]);
const referenceChildItems = ref<any>([]);

function loadChildItems(key: string) {
    if (key) {
        if (key === "allTokens") {
            return REFERENCE_ITEMS.filter(x => x.items).flatMap(x => [...x.items!])
        } else {
            return REFERENCE_ITEMS.find(x => x.key === key)?.items || []
        }
    }
    return [];
}

function onSelectReference(key: string) {
    const rs = loadChildItems(key);
    referenceChildItems.value = [...rs];
}

</script>@/utils/constant@/utils/constants