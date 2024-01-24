<template>
  <v-container class="home-page">
    <v-row class="ma-0">
      <v-col cols="12" lg="12">
        <div class="ml-5">
          <h1 class="mb-4">{{ getHelloText() }}</h1>
          <p class="font-weight-light">
            Paste freely, build confidently. SelfKits guarantees your code stays private, giving you peace of mind to
            focus on your craft. Say goodbye to online data leaks and accidental exposures.
          </p>
        </div>

        <v-row>
          <v-col cols="12" lg="6">
            <Creation />
          </v-col>

          <v-col cols="12" lg="6">
            <NewsCard />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Launchpad from '@/components/Launchpad.vue'
import Creation from '@/components/Creation.vue'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'home',
  components: {
    Launchpad,
    Creation,
    NewsCard
  },
  methods: {
    getHelloText: function () {
      const today = new Date()
      const curHr = today.getHours()

      if (curHr < 12) {
        return 'Good morning';
      }
      if (curHr < 18) {
        return 'Good afternoon';
      }
      return 'Good evening';
    }
  }
}
</script>
