<template>
  <section id="work" class="padding-bottom-0">
    <div class="container">
      <h2>From thousand dollar websites to billion dollar websites, I've got you covered.</h2>
    </div>
    <div class="portfolio">
      <div v-for="(portfolioItem, index) in portfolioItems" :key="index">
        <portfolio-card
          :backgroundImage="portfolioItem.image"
          :image="portfolioItem.url"
          :title="portfolioItem.name"
          :description="portfolioItem.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import portfolioItems from '../assets/json/portfolio'
  import PortfolioCard from './PortfolioCard'

  export default {
    components: {
      PortfolioCard
    },
    data () {
      return {
        portfolioItems: portfolioItems
      }
    }
  }
</script>
