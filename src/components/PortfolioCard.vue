<template>
  <div
    @click="portfolioItemShow = true"
    v-on:keypress.enter="portfolioItemShow = true"
    v-on:keypress.space.prevent="portfolioItemShow = true"
    tabindex="0"
    class="portfolio-item"
    :style="{ backgroundImage: `url('${backgroundImage}')` }"
  >
    <div>
      <h2 class="banner">{{ title }}</h2>
    </div>
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell"></div>
    </div>
    <transition name="slide-fade">
      <div class="portfolio-item-details" v-if="portfolioItemShow">
        <v-spacer size="3rem"></v-spacer>
        <div class="container">
          <div
            tabindex="0"
            @click.stop="portfolioItemShow = !portfolioItemShow"
            v-on:keypress.enter.stop="portfolioItemShow = !portfolioItemShow"
            v-on:keypress.space.stop.prevent="
              portfolioItemShow = !portfolioItemShow
            "
            class="portfolio-item-close"
          >
            X
          </div>
          <h3>{{ title }}</h3>
          <v-spacer size="2rem"></v-spacer>
          <img :src="image" :alt="title + ' screenshot'" />
          <v-spacer size="2rem"></v-spacer>
          <p v-html="description" />
        </div>
        <v-spacer size="3rem"></v-spacer>
      </div>
    </transition>
  </div>
</template>

<script>
import VSpacer from './VSpacer'

export default {
  name: 'PortfolioCard',
  components: {
    VSpacer
  },
  data() {
    return {
      portfolioItemShow: false
    }
  },
  props: {
    title: String,
    image: String,
    description: String,
    backgroundImage: String
  }
}
</script>
