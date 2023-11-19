<template>
  <div>
    <h3 class="ml-5 mt-10 mb-1">Start something new</h3>
    <v-list style="background: transparent">
      <v-list-item>
        <v-btn
          class="custom-transform-class text-none mr-5 subheading font-weight-bold"
        >
          <v-icon class="mr-2" icon="mdi-subtitles-outline"></v-icon>
          <span class="ml-2 font-weight-light">Create a request</span>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          class="custom-transform-class text-none mr-5 subheading font-weight-bold"
        >
          <v-icon class="mr-2" icon="mdi-note-text-outline"></v-icon>
          <span class="ml-2 font-weight-light">Create a collection</span>
          <v-icon icon="mdi-menu-down"></v-icon>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          class="custom-transform-class text-none mr-5 subheading font-weight-bold"
        >
          <v-icon class="mr-2" icon="mdi-folder-open-outline"></v-icon>
          <span class="ml-2 font-weight-light">Create an environment</span>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          disabled
          class="custom-transform-class text-none mr-5 subheading font-weight-bold"
        >
          <v-icon class="mr-2" icon="mdi-scatter-plot-outline"></v-icon>
          <span class="ml-2 font-weight-light">Create an API</span>
        </v-btn>
      </v-list-item>

      <v-list-item>
        <v-btn
          class="custom-transform-class text-none mr-5 subheading font-weight-bold"
        >
          <v-icon class="mr-2" icon="mdi-dots-horizontal"></v-icon>
          <span class="ml-2 font-weight-light">View More</span>
        </v-btn>
      </v-list-item>
    </v-list>

    <h3 class="ml-5 mt-10">Recent workspaces</h3>
    <p class="ml-10 mt-8 font-weight-light">
      Find your most recently used workspaces here
    </p>

    <h3 class="ml-5 mt-10">Customize</h3>
    <v-switch
      class="ml-5 mb-3"
      v-model="ex11"
      label="Dark mode"
      color="orange darken-3"
      hide-details
    >
    </v-switch>
    <v-switch
      class="ml-5 mb-3"
      v-model="ex11"
      label="Enable Launchpad"
      color="orange darken-3"
      hide-details
    >
    </v-switch>
    <v-btn
      class="custom-transform-class text-none mr-5 subheading font-weight-bold"
    >
      <v-icon class="mx-2" icon="mdi-dots-horizontal"></v-icon>
      <span class="ml-3 font-weight-light">More settings</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    ex11: false,
  }),
};
</script>
