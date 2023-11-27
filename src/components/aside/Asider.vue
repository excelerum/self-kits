<template>
  <v-navigation-drawer class="aside-menu" floating>
    <v-text-field density="compact" variant="solo" label="Search..." prepend-inner-icon="mdi-magnify" single-line
      hide-details style="padding: 8px" bg-color="#3a3a3a" v-model="searchValue"></v-text-field>
    <v-divider></v-divider>

    <v-list :lines="false" density="comfortable" nav>
      <v-list-item v-for="(item, i) in menuItems" :key="i" :value="item" color="primary" :to="item.link">
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
  .v-list-item__prepend>.v-icon~.v-list-item__spacer {
    width: 18px;
  }
}
</style>

<script setup lang="ts">
import debounce from 'debounce';
import { ref, watch } from 'vue';

const items = [
  {
    text: 'Example Page',
    icon: 'mdi-home',
    link: '/home'
  },
  {
    text: 'Unix Time Converter',
    icon: 'mdi-clock-outline',
    link: '/unix-time-converter',
  },
  {
    text: 'JSON Format/Validate',
    icon: 'mdi-code-json',
    link: '/json-format-validate'
  },
  {
    text: 'Bcrypt Generator',
    icon: 'mdi-onepassword',
    link: '/bcrypt-generator'
  },
  { text: 'Base64 String Encode/Decode', icon: 'mdi-history', link: '/base64-string' },
  { text: 'Base64 Image Encode/Decode', icon: 'mdi-upload', link: '/base64-image' },
  { text: 'JWT Debugger', icon: 'mdi-cloud-upload', link: '/jwt-debugger' }
]

const searchValue = ref<string | null>(null);
const menuItems = ref<any[]>(items);

/**
 * Watch on search menu
 */
watch(searchValue, debounce((newValue, oldValue) => {
  if (newValue !== oldValue) {
    if (newValue) {
      menuItems.value = items.filter(x => newValue && x.text.toLowerCase().includes(newValue.toLowerCase()));
    } else {
      menuItems.value = [...items];
    }
  }
}, 500));

</script>
