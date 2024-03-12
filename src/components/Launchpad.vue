<template>
  <v-app-bar class="header-bar" style="border-bottom: 1px solid grey">
    <v-btn elevation="1" color="grey darken-3">
      <span class="text-capitalize">Launchpad</span>
      <v-icon class="pl-16" icon="mdi-close"></v-icon>
    </v-btn>
    <v-btn outlined class="ml-2" color="grey">
      <v-icon icon="mdi-plus"></v-icon>
    </v-btn>
    <v-btn outlined class="ml-2" color="grey">
      <v-icon icon="mdi-dots-horizontal"></v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-divider vertical></v-divider>
    <v-autocomplete class="ml-3" label="No Environment" hide-details solo dense>
    </v-autocomplete>
    <v-btn class="ml-3 mr-3" elevation="1" color="grey darken-3">
      <v-icon icon="mdi-eye"></v-icon>
    </v-btn>
    <v-btn elevation="1" color="grey darken-3">
      <v-icon icon="mdi-tune"></v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header-bar {
  position: relative !important;
}
</style>
