<template>
  <!-- <v-navigation-drawer
    color="grey-lighten-3"
    rail
  >
  </v-navigation-drawer> -->
  <v-navigation-drawer floating class="aside-menu">
    <v-text-field label="Search..." class="pa-2" density="compact" variant="solo-filled" prepend-inner-icon="mdi-magnify"
      single-line hide-details v-model="searchValue"></v-text-field>
    <v-divider></v-divider>

    <v-list :lines="false" density="comfortable" nav>
      <v-list-item v-for="(item, i) in menuItems" :key="i" :value="item" color="primary" :to="item.path">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
.aside-menu {
  .v-list-item__prepend>.v-icon~.v-list-item__spacer {
    width: 16px;
  }
}
</style>

<script setup lang="ts">
import { mainMenuItems } from '@/router';
import debounce from 'debounce'
import { ref, watch } from 'vue'

const items = mainMenuItems.filter(x => x.name && x.hide !== false).map(x => {
  delete x.component;
  return x;
})

const searchValue = ref<string | null>(null)
const menuItems = ref<any[]>(items)

/**
 * Watch on search menu
 */
watch(
  searchValue,
  debounce((newValue, oldValue) => {
    if (newValue !== oldValue) {
      if (newValue) {
        menuItems.value = items.filter((x) => newValue && String(x.name).toLowerCase().includes(newValue.toLowerCase()))
      } else {
        menuItems.value = [...items]
      }
    }
  }, 500)
)
</script>
