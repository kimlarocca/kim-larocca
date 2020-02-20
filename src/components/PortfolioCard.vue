<template>

  <div @click="portfolioItemShow = true" v-on:keypress.enter="portfolioItemShow = true" v-on:keypress.space.prevent="portfolioItemShow = true" tabindex="0" class="portfolio-item"
       :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <div>
      <h2 class="banner">{{ title }}</h2>
    </div>
    <transition name="slide-fade">
      <div class="portfolio-item-details" v-show="portfolioItemShow">
        <div class="container">
          <div tabindex="0" @click.stop="portfolioItemShow = !portfolioItemShow" v-on:keypress.enter.stop="portfolioItemShow = !portfolioItemShow" v-on:keypress.space.stop.prevent="portfolioItemShow = !portfolioItemShow" class="portfolio-item-close">X</div>
          <h3>{{ title }}</h3>
          <img :src="image" :alt="title+' screenshot'">
          <p>{{ description }}</p>
        </div>
      </div>
    </transition>
  </div>


</template>

<script>
  export default {
    name: 'PortfolioCard',
    data () {
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
