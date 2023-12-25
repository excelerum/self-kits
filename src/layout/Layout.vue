<template>
  <v-app>
    <!-- <Systembar /> -->
    <Navbar />
    <Footer></Footer>
    <Asider />
    <v-main>
      <LoadingTool v-if="appStateStore.isScreenLoading" />
      <router-view v-else></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Asider from "@/components/aside/Asider.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LoadingTool from "@/components/LoadingTool.vue";
import { useAppStateStore } from '@/stores/app-state'

const appStateStore = useAppStateStore();

</script>
