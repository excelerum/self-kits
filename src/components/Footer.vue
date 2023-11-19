<template>
  <v-footer app padless style="border-top: 1px solid grey" height="44">
    <v-btn
      class="ma-2 footer-menu-icon"
      size="x-small"
      prepend-icon="terminal"
      variant="text"
    >
      Console
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      class="ma-2 footer-menu-icon"
      variant="text"
      size="x-small"
      icon="keyboard"
    >
    </v-btn>
    <v-btn
      class="ma-2 footer-menu-icon"
      variant="text"
      size="x-small"
      icon="help"
    >
    </v-btn>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer-menu-icon {
  .v-icon {
    font-size: 16px;
  }
}
</style>

<script lang="ts">
export default {
  data: () => ({
    toggle_exclusive: undefined,
  }),
};
</script>
