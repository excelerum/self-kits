<template>
  <v-footer app padless style="border-top: 1px solid grey" height="24">
    <v-btn
      class="footer-menu-icon"
      size="x-small"
      prepend-icon="mdi-console"
      variant="text"
    >
      <span style="margin-bottom: 4px;"> Console </span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      class="footer-menu-icon"
      variant="text"
      size="x-small"
      icon="mdi-keyboard"
    >
    </v-btn>
    <v-btn
      class="footer-menu-icon"
      variant="text"
      size="x-small"
      icon="mdi-help"
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
