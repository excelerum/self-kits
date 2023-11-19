import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { md1, md2, md3 } from "vuetify/blueprints";

// Vuetify
import "vuetify/styles";
// Icon Font
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  blueprint: md3,
  components,
  directives,
});
