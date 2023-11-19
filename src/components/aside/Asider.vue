<template>
  <v-navigation-drawer class="aside-menu" floating>
    <v-text-field
      density="compact"
      variant="solo"
      label="Search..."
      prepend-inner-icon="search"
      single-line
      hide-details
    ></v-text-field>
    <v-divider></v-divider>

    <v-list :lines="false" density="comfortable" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        :to="item.link"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.aside-menu .menu .menu-sub .menu-item a a.menu-link {
  padding-left: calc(0.75rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}

.aside-menu .menu .menu-sub .menu-sub .menu-item a a.menu-link {
  padding-left: calc(1.5rem + 25px);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  transition: none;
  outline: none !important;
}
</style>

<script setup lang="ts">
const items = [
  {
    link: "/unix-time-converter",
    text: "Unix Time Converter",
    icon: "schedule",
  },
  { text: "JSON Format/Validate", icon: "star", link: "/home" },
  { text: "Base64 String Encode/Decode", icon: "history" },
  { text: "Base64 Image Encode/Decode", icon: "upload" },
  { text: "JWT Debugger", icon: "cloud_upload" },
];
</script>
