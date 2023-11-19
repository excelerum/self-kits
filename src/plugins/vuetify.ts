import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, md } from "vuetify/iconsets/md";
import { md1, md2, md3 } from "vuetify/blueprints";

// Vuetify
import "vuetify/styles";
// Font Icon
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
  blueprint: md3,
  components,
  directives,
});
