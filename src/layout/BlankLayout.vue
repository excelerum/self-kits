<template>
  <v-app>
    <v-layout>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlankLayout",
});
</script>
