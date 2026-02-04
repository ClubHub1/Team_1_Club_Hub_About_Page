import { createApp } from 'vue'
import App from './App.vue'

//Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import './plugins/fontSources'

import chLogoComponent from './components/icon.vue'

const vuetify = createVuetify({
    components,
  directives,
  icons: {
    aliases:{
        chLogo: chLogoComponent,
    },
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
        light: {
            colors: {
                primary: "#041E42"
            }
        },
        dark: {
            colors: {
                primary: "#041E42"
            },
        },
    },
  },
})


const app = createApp(App);

app.use(vuetify);
app.mount('#app');