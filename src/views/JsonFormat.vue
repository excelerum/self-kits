<template>
  <v-container class="">
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]">
        <v-sheet class="pa-2 ma-2"> .v-col-{{ cols[0] }} </v-sheet>
      </v-col>

      <v-col :cols="cols[1]">
        <v-sheet class="pa-2 ma-2"> .v-col-{{ cols[1] }} </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { lg, sm } = useDisplay();

const cols = computed(() => {
  return lg.value ? [3, 9] : sm.value ? [9, 3] : [6, 6];
});
</script>
