<template>
  <v-navigation-drawer class="aside-menu" floating>
    <v-text-field
      density="compact"
      variant="solo"
      label="Search..."
      prepend-inner-icon="mdi-magnify"
      single-line
      hide-details
      style="padding: 8px"
      bg-color="#3a3a3a"
    ></v-text-field>
    <v-divider></v-divider>

    <v-list :lines="false" density="comfortable" nav>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" :to="item.link">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
  .aside-menu {
    .v-list-item__prepend > .v-icon ~ .v-list-item__spacer {
      width: 18px;
    }
  }
</style>

<script setup lang="ts">
  const items = [
    {
      link: '/unix-time-converter',
      text: 'Unix Time Converter',
      icon: 'mdi-clock-outline'
    },
    {
      text: 'JSON Format/Validate',
      icon: 'mdi-star',
      link: '/json-format-validate'
    },
    { text: 'Base64 String Encode/Decode', icon: 'mdi-history', link: '/home' },
    { text: 'Base64 Image Encode/Decode', icon: 'mdi-upload' },
    { text: 'JWT Debugger', icon: 'mdi-cloud-upload' }
  ]
</script>
