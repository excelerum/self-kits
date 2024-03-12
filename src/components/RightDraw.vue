<template>
    <v-layout>
        <v-navigation-drawer v-model="drawer" temporary>
            
        </v-navigation-drawer>
    </v-layout>
</template>

<script lang="ts" setup>
import { useAppStateStore } from '@/stores/app-state'
import { ref } from 'vue'

const drawer = ref(false)
const appState = useAppStateStore();

</script>