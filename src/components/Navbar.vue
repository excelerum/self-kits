<template>
  <v-app-bar app flat height="60">
    <v-btn dense elevation="2" color="darken-3" class="text-capitalize mr-3 subheading font-weight-bold">
      <v-icon class="mr-2 ml-n2" icon="mdi-plus-circle-outline"></v-icon>
      <span class="mr-n2">New</span>
    </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ props }">
        <v-btn elevation="1" color="grey darken-3" class="grey--text text-capitalize mr-3 subheading font-weight-bold"
          v-bind="props">
          <v-icon class="mr-1 ml-n2" color="grey" icon="mdi-note-plus-outline"></v-icon>
          <v-icon class="mr-n2" color="grey" icon="mdi-menu-down"></v-icon>
        </v-btn>
      </template>
      <v-list height="200">
        <v-list-item-title class="ml-4 body-2 grey--text"> OPEN NEW </v-list-item-title>
        <v-row>
          <v-col>
            <v-list-item dense v-for="(item, index) in items" :key="index">
              <v-list-item-title class="body-2">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
          <v-col>
            <v-list-item dense v-for="(link, i) in links" :key="i">
              <v-list-item-title class="body-2 grey--text">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <v-btn class="text-capitalize mr-5 subheading font-weight-bold">
      <v-icon class="mr-2" icon="mdi-view-dashboard-outline" />
      <span class="mr-2">My Workspace</span>
      <v-icon icon="mdi-menu-down"></v-icon>
    </v-btn>
    <v-btn elevation="1" color="grey darken-3" class="text-capitalize subheading font-weight-bold">
      <v-icon class="mr-2 ml-n2" icon="mdi-account-multiple-plus-outline" />
      <span class="mr-n2">Invite</span>
    </v-btn>

    <v-spacer></v-spacer>
    <div class="d-flex flex-wrap ga-4 mr-3">
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn fab v-bind="props" class="orange darken-3" icon="mdi-autorenew" size="small" />
        </template>
        <span>Sync your API requests across devices</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn fab v-bind="props" icon="mdi-cog" size="small" />
        </template>
        <span>Settings</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn fab v-bind="props" icon="mdi-bell-outline" size="small" />
        </template>
        <span>Notifications</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ props }">
          <v-btn fab v-bind="props" class="teal lighten-2" size="small" icon="mdi-account-edit-outline" to="/sign-up"/>
        </template>
        <span>Manage accounts</span>
      </v-tooltip>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [{ title: 'Tab' }, { title: 'Window' }, { title: 'Runner Window' }],
    links: [{ title: 'Ctrl+T' }, { title: 'Ctrl+Shift+N' }, { title: 'Ctrl+Shift+R' }]
  })
}
</script>
