<template>
  <div class="px-3 pt-3" style="border-right: 1px solid grey; height: 100%">
    <v-text-field
      density="compact"
      variant="solo"
      label="Search..."
      prepend-inner-icon="search"
      single-line
      hide-details
    ></v-text-field>
    <v-divider class="my-3"></v-divider>
    <div class="text-center mt-10 mx-10">
      <p class="body-1 font-weight-bold">You haven't sent any toolkits</p>
      <p class="body-2 grey--text darken-2--text">
        Any request you send in this workspace will appear here.
      </p>
      <v-btn
        elevation="1"
        color="grey darken-3"
        class="text-capitalize mt-5 subheading font-weight-bold"
      >
        <v-icon class="mr-1" color="#EF6C00">north_west</v-icon>
        <span class="mr-1 grey--text">Show me how</span>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    ex11: false,
  }),
};
</script>
