<template>
  <div class="news-card">
    <v-card outlined class="mt-5 mr-5">
      <template v-slot:title>
        <div>
          <v-icon icon="mdi-newspaper-variant-outline"></v-icon>
          <span class="ml-2">What's new with Selfkits</span>
          <v-divider class="mt-2"></v-divider>
        </div>
      </template>
      <template v-slot:text>
        <div class="ml-2">
          <h4>Selfkits release first version<span class="ml-3 text--darken-3 px-1"
              style="border: 1px solid #ef6c00">New</span>
          </h4>
          <p class="mt-4 grey--text font-weight-light">
            First version with tag 0.0.1 is release.
          </p>
          <v-btn class="mt-4 text--darken-3 custom-transform-class text-none" rounded="lg"> Release Notes </v-btn>
        </div>
      </template>
    </v-card>

  </div>
</template>
