<template>
  <v-app>
    <v-layout>
      <Navbar />
      <Footer></Footer>
      <Asider />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Asider from "@/components/aside/Asider.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Layout",
  components: {
    Asider,
    Navbar,
    Footer,
  },
});
</script>
