<template>
  <v-footer app border class="app-footer pa-2 text-medium-emphasis" height="24">
    <v-btn class="footer-menu-icon" size="x-small" prepend-icon="mdi-console" variant="text" rounded="0" text="Console"
      @click="openDevTools" />

    <v-spacer></v-spacer>

    <div class="d-flex flex-wrap ga-2">
      <v-btn class="footer-menu-icon" size="x-small" prepend-icon="mdi-email-fast-outline" variant="text" rounded="0"
        text="Feedback" />
      <v-btn class="footer-menu-icon app-version" rounded="0" density="comfortable" variant="text" size="x-small"
        prepend-icon=" mdi-tag-outline" :text="version" @click="openReleaseNotes">
      </v-btn>
      <v-btn class="footer-menu-icon" rounded="0" density="comfortable" variant="text" size="x-small" icon="mdi-keyboard">
      </v-btn>
      <v-btn class="footer-menu-icon" rounded="0" density="comfortable" variant="text" size="x-small" icon="mdi-help">
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

  .v-btn .v-btn__prepend+.v-btn__content {
    margin-bottom: 2px;
  }
}
</style>

<script lang="ts">
import { ipcRenderer } from 'electron'
import pkg from "../../package.json";

export default {
  data: () => ({
    toggle_exclusive: undefined,
    version: pkg.version,
    packageName: pkg.name
  }),
  methods: {
    openDevTools: function () {
      ipcRenderer.send('COMMANDS', "OPEN_DEVTOOLS");
    },
    openReleaseNotes: function () {
      const repo = this.packageName.replace("@", "")
      const baseUrl = `https://github.com/${repo}/releases/tag/${this.version}`;
      window.open(baseUrl)
    }
  }
};
</script>
