<template>
  <section id="why">
    <div class="container">
      <h2>Why Me?</h2>
      <div class="bs_row bs_bottom">
        <div class="bs_one bs_margin30">
          <div class="bs_padding3">
            <h3 class="bs_centeredOnMobile">My Boss</h3>
            <div class="bubble">"I hired Kim as a Senior Web Developer at Toys”R”Us. Kim lead many high-profile
              development projects to helped to drive user engagement and conversion. Beyond that, Kim
              is always
              looking for ways to apply her programming know-how towards improving the team’s
              operation efficiency. She created tools that aided with cross-functional team
              collaboration. This
              had a direct impact to project KPIs. Kim is an asset and would make a great addition to
              any company that’s lucky to have
              her."
            </div>
            <p>Jason Chuon</p>
          </div>
        </div>
        <div class="bs_one bs_margin30">
          <div class="bs_padding3">
            <h3 class="bs_centeredOnMobile">My Team</h3>
            <div class="bubble">"As Director of Development for my team at W2O, Kim
              not only encouraged me but empowered me to really grow and sharpen my skills as a
              developer. Simply put, if you are looking for someone who is more than just a great
              developer, but a great evangelist and leader, look no further
              than Kim Larocca. She is the person you can count on to lead, motivate, and make sure
              that
              your team not only makes it to the finish line of any technical project but truly grow
              on the
              way there."
            </div>
            <p>George Ulloa</p>
          </div>
        </div>
        <div class="bs_one bs_margin30">
          <div class="bs_padding3">
            <h3 class="bs_centeredOnMobile">My Client</h3>
            <div class="bubble">"Kim, thanks for your help. You have no idea what a
              continual relief it is to me
              to just be able to ask you questions like this. I'll gladly refer anyone I know to you
              at
              any time. I cannot tell you how pleased we are, both with the website, and with you... I
              have nothing to say but good things about you. I can't think of a single negative
              experience
              we've ever had since you took over our website, and many times you have gone way beyond. We will be glad
              to be a reference
              for you
              anytime."
            </div>
            <p>Margie Shine</p>
          </div>
        </div>
      </div>

      <div class="bs_centered">
        <a class="button" tabindex="0" @click="showReviews = !showReviews">
          <template v-if="!showReviews">check out more reviews</template>
          <template v-else>there's too many reviews!</template>
        </a>
      </div>

      <transition name="slide-fade">
        <reviews v-show="showReviews"/>
      </transition>

      <div class="bs_margin80"></div>
      <h4 class="bs_centered bs_margin30">Here are some companies who have trusted me to work on their websites:</h4>

      <div class="bs_centered bs_margin30">
        <a class="button bs_margin20 bs_marginHorizontal1" :class="{'inactive': logoCategory !== 'all'}" tabindex="0"
           @click="logoCategory = 'all'">all</a>
        <a class="button bs_margin20 bs_marginHorizontal1" :class="{'inactive': logoCategory !== 'healthcare'}" tabindex="0"
           @click="logoCategory = 'healthcare'">healthcare</a>
        <a class="button bs_margin20 bs_marginHorizontal1" :class="{'inactive': logoCategory !== 'ecommerce'}" tabindex="0"
           @click="logoCategory = 'ecommerce'">ecommerce</a>
        <a class="button bs_margin20 bs_marginHorizontal1" :class="{'inactive': logoCategory !== 'tech'}" tabindex="0"
           @click="logoCategory = 'tech'">tech</a>
        <a class="button bs_margin20 bs_marginHorizontal1" :class="{'inactive': logoCategory !== 'education'}" tabindex="0"
           @click="logoCategory = 'education'">education</a>
      </div>

      <div class="bs_row" id="logos">
        <div v-for="(logo, index) in filteredLogos" :key="index" class="bs_one logo">
          <img :src="logo.url" :alt="logo.name + ' logo'">
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import logos from '../assets/json/logos'
  import Reviews from '../components/Reviews.vue'

  export default {
    components: {
      Reviews
    },
    data () {
      return {
        logos: logos,
        logoCategory: 'all',
        showReviews: false
      }
    },
    computed: {
      filteredLogos () {
        if (this.logoCategory === 'all') {
          return this.logos
        } else {
          return this.logos.filter(logo => {
            return logo.category.toLowerCase().includes(this.logoCategory.toLowerCase())
          })
        }
      }
    }
  }
</script>
