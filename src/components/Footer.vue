<template>
  <v-footer app inset border class="app-footer pa-2 text-medium-emphasis" height="24">
    <v-btn class="footer-menu-icon" size="x-small" prepend-icon="mdi-console" variant="text" rounded="0" text="Console" />

    <v-spacer></v-spacer>

    <div class="d-flex flex-wrap ga-3">
      <v-btn class="footer-menu-icon" rounded="0" density="comfortable" variant="text" size="x-small" icon="mdi-keyboard">
      </v-btn>
      <v-btn class="footer-menu-icon" rounded="0" density="comfortable" variant="text" size="x-small" icon="mdi-help">
      </v-btn>
      <v-btn class="footer-menu-icon app-version" rounded="0" density="comfortable" variant="text" size="x-small"
        prepend-icon=" mdi-tag-outline" text="1.0.0">
      </v-btn>
    </div>
  </v-footer>
</template>

<style lang="scss">
.app-footer {
  .footer-menu-icon {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity)) !important;
  }

  .app-version {
    // Fix heigh issues
    height: calc(var(--v-btn-height) + 0px);
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
