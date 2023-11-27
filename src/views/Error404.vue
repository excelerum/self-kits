<template>
  <v-container>
    <v-row justify="center" align="center" style="height: 99vh">
      <div>
        <!--begin::Illustration-->
        <img src="media/illustrations/sketchy-1/18.png" alt="" class="mw-100 mb-10 h-lg-450px" style="width: 450px" />
        <!--end::Illustration-->

        <!--begin::Message-->
        <h1 class="fw-bold mb-10" style="color: #a3a3c7">
          Seems there is nothing here
        </h1>
        <!--end::Message-->

        <!--begin::Link-->
        <div class="d-flex justify-center">
          <router-link to="/" class="btn btn-primary">
            <v-btn prepend-icon="mdi-home" variant="tonal">
              Back to Home
            </v-btn>
          </router-link>
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
