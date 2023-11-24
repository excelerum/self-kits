<template>
  <v-container class="unix-time">
    <v-row class="ma-2">
      <v-col>
        <div class="d-flex flex-wrap ga-3">
          <div>Shortcut:</div>
          <v-btn size="x-small" rounded="sm"> Now </v-btn>
          <v-btn size="x-small" rounded="sm"> Clipboard </v-btn>
          <v-btn size="x-small" rounded="sm"> Clear </v-btn>
          <v-btn icon="mdi-cog" size="x-small" rounded="sm" density="comfortable" />
        </div>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col :cols="6">
        <v-text-field
          label="Input"
          variant="outlined"
          density="compact"
          hint="Tips: Mathematical operators + - * / are supported"
          persistent-hint
        ></v-text-field>
      </v-col>
      <v-col :cols="6">
        <v-select
          label="Type"
          :items="['Unix time (seconds since epoch)', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="outlined"
          density="compact"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-2">
      <v-col :cols="5">
        <div class="">
          <v-text-field label="Local" variant="outlined" density="compact">
            <template v-slot:append>
              <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" />
            </template>
          </v-text-field>
          <v-text-field label="UTC (ISO 8601)" variant="outlined" density="compact">
            <template v-slot:append>
              <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" />
            </template>
          </v-text-field>
          <v-text-field label="Relative" variant="outlined" density="compact">
            <template v-slot:append>
              <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" />
            </template>
          </v-text-field>
          <v-text-field label="Unix time" variant="outlined" density="compact">
            <template v-slot:append>
              <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" />
            </template>
          </v-text-field>
        </div>
      </v-col>
      <v-col :cols="2"
        ><div>
          <v-text-field label="Day of year" variant="outlined" density="compact">
            <template v-slot:append> <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template
          ></v-text-field>
          <v-text-field label="Week of year" variant="outlined" density="compact">
            <template v-slot:append> <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template
          ></v-text-field>
          <v-text-field label="Is leaf year?" variant="outlined" density="compact">
            <template v-slot:append> <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template
          ></v-text-field></div
      ></v-col>
      <v-col :cols="5">
        <div class="text-subtitle-1 text-medium-emphasis mb-4">Other formats (local)</div>
        <v-text-field variant="outlined" density="compact">
          <template v-slot:append>
            <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template></v-text-field
        ><v-text-field variant="outlined" density="compact">
          <template v-slot:append>
            <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template></v-text-field
        ><v-text-field variant="outlined" density="compact">
          <template v-slot:append>
            <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template></v-text-field
        ><v-text-field variant="outlined" density="compact">
          <template v-slot:append>
            <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template></v-text-field
        ><v-text-field variant="outlined" density="compact">
          <template v-slot:append>
            <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template></v-text-field
        ><v-text-field variant="outlined" density="compact">
          <template v-slot:append>
            <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template></v-text-field
        ><v-text-field variant="outlined" density="compact">
          <template v-slot:append>
            <v-btn icon="mdi-content-copy" rounded="sm" density="comfortable" /> </template></v-text-field
      ></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  export default {
    name: 'UnixTime'
  }
</script>
