<template>
  <v-container>
    <v-row justify="center" align="center" style="height: 99vh">
      <div>
        <!--begin::Illustration-->
        <img src="/images/404_error-dark.png" alt="" class="mw-100 mb-10 h-lg-450px" style="width: 450px" />
        <!--end::Illustration-->

        <!--begin::Message-->
        <h1 class="fw-bold mb-10" style="color: #a3a3c7">
          Seems there is nothing here
        </h1>
        <!--end::Message-->

        <!--begin::Link-->
        <div class="d-flex justify-center">
          <v-btn prepend-icon="mdi-home" variant="tonal" to="/">
            Back to Home
          </v-btn>
        </div>
        <!--end::Link-->
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "error-404",
  components: {},
  setup() { },
});
</script>
