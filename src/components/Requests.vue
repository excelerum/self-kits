<template>
  <div class="px-3 pt-3">
    <span>History</span>
    <v-divider class="my-3"></v-divider>
    <div class="text-center mt-10 mx-10">
      <p class="body-1 font-weight-bold">You haven't sent any toolkits</p>
      <p class="body-2 grey--text darken-2--text">Any request you send in this workspace will appear here.</p>
      <v-btn elevation="1" color="grey darken-3" class="text-capitalize mt-5 subheading font-weight-bold">
        <v-icon class="mr-1" color="#EF6C00" icon="mdi-arrow-top-left"></v-icon>
        <span class="mr-1 grey--text">Show me how</span>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data: () => ({
      ex11: false
    })
  }
</script>
