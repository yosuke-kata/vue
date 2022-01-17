<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to ...
        </v-card-title>
        <v-card-text>
            {{weather.region}}
            today    :{{weather.today}}
            tomorrow :{{weather.tomorrow}}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <ul>
            <li>
              <Pulldown
                v-model="formData.selectedRegion"
                label="地域"
                :items="pulldownObj"
                :formatter="(item) => `${item.label}  ${item.key}`" 
                />
                <!-- :selected="selectedRegion"
                @change="$emit('change:region', $event)" -->
            </li>
            <li>
              <v-btn color="primary" @click="fetchWeather"> お天気を確認 </v-btn> <!-- nuxt to="/inspire" -->
            </li>
          </ul>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import { WEATHER_CONVERTER   } from "../infrastructure/converter/index"
import Pulldown from "../components/atoms/common/Pulldown.vue"
import { REGION_PULLDOWN_OBJ } from "@/infrastructure/Region.js";

export default {
  name: 'IndexPage',
  components: {
    Pulldown,
  },
  data() {
    return {
      /** @type {{[key: string]: string}} date -> */
      weather: {},

      /** @type {Weather[]} */
      weather2: [],

      /** @type {ParentChain} */
      selectedWeather: undefined,

      weatherClient: this.$store.getters['commonStore/weatherClient'],
      pulldownObj: REGION_PULLDOWN_OBJ(),


      // coming soon..
      modalHelper: undefined,
      formData: {
        selectedRegion: "",
      },
      errorMessage: [],
      treeErrorMessage: {},
    }
  },
  computed: {
    isGetWeather () { return this.weather}
  },
  methods: {
    clearFormData() {
      for(const k in this.formData) {
        this.formData[k] = "";
      }
      this.pulldownObj  = {};
      this.errorMessage = [];
    },
    async fetchWeather() {
      try {
        const res = await this.weatherClient.fetchWeather(this.formData.selectedRegion);
        const weathers = WEATHER_CONVERTER.mapFromExternal([res]); 

        this.$set(this.weather, "region", weathers[0].region);
        this.$set(this.weather, "today", weathers[0].today);
        this.$set(this.weather, "tomorrow", weathers[0].tomorrow);
      }
      catch(e) {
        console.log(e);
      }
    }
  }
}
</script>
