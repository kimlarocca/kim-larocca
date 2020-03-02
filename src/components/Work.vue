<template>
  <section id="work" class="padding-bottom-0">
    <v-spacer size="100px"></v-spacer>
    <div class="container">
      <h2>From thousand dollar websites to billion dollar websites, I've got you covered.</h2>
      <v-spacer size="100px"></v-spacer>
    </div>
    <div class="portfolio">
      <portfolio-card
        v-for="(portfolioItem, index) in portfolioItems"
        :key="index"
        :backgroundImage="portfolioItem.image"
        :image="portfolioItem.url"
        :title="portfolioItem.name"
        :description="portfolioItem.description"
      />
    </div>
  </section>
</template>

<script>
  import portfolioItems from '../assets/json/portfolio'
  import PortfolioCard from './PortfolioCard'
  import VSpacer from './VSpacer'

  export default {
    components: {
      PortfolioCard,
      VSpacer
    },
    data () {
      return {
        portfolioItems: portfolioItems
      }
    }
  }
</script>
