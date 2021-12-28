<template>
  <div id="why">
    <div>
      <section>
        <div class="container">
          <v-spacer size="100px"></v-spacer>
          <h2>Why Me?</h2>
          <v-spacer size="2rem"></v-spacer>

          <h3 class="bs_centeredOnMobile">Companies that have trusted me:</h3>
          <v-spacer size="2rem"></v-spacer>

          <div class="bs_centeredOnMobile">
            <a
              class="button category bs_margin20 bs_marginRight1"
              :class="{ active: logoCategory === 'all' }"
              tabindex="0"
              @click="setCategory('all')"
              v-on:keypress.enter="setCategory('all')"
              v-on:keypress.space.prevent="setCategory('all')"
            >
              all
            </a>
            <a
              class="button category bs_margin20 bs_marginRight1"
              :class="{ active: logoCategory === 'healthcare' }"
              tabindex="0"
              @click="setCategory('healthcare')"
              v-on:keypress.enter="setCategory('healthcare')"
              v-on:keypress.space.prevent="setCategory('healthcare')"
              >healthcare</a
            >
            <a
              class="button category bs_margin20 bs_marginRight1"
              :class="{ active: logoCategory === 'ecommerce' }"
              tabindex="0"
              @click="setCategory('ecommerce')"
              v-on:keypress.enter="setCategory('ecommerce')"
              v-on:keypress.space.prevent="setCategory('ecommerce')"
              >ecommerce</a
            >
            <a
              class="button category bs_margin20 bs_marginRight1"
              :class="{ active: logoCategory === 'tech' }"
              tabindex="0"
              @click="setCategory('tech')"
              v-on:keypress.enter="setCategory('tech')"
              v-on:keypress.space.prevent="setCategory('tech')"
              >tech</a
            >
            <a
              class="button category bs_margin20 bs_marginRight1"
              :class="{ active: logoCategory === 'media' }"
              tabindex="0"
              @click="setCategory('media')"
              v-on:keypress.enter="setCategory('media')"
              v-on:keypress.space.prevent="setCategory('media')"
              >media</a
            >
            <a
              class="button category bs_margin20 bs_marginRight1"
              :class="{ active: logoCategory === 'education' }"
              tabindex="0"
              @click="setCategory('education')"
              v-on:keypress.enter="setCategory('education')"
              v-on:keypress.space.prevent="setCategory('education')"
              >education</a
            >
          </div>

          <transition name="slide-fade">
            <div v-if="logoCategory" class="bs_row logos">
              <div
                v-for="(logo, index) in filteredLogos"
                :key="index"
                class="bs_one logo"
              >
                <img :src="logo.url" :alt="logo.name + ' logo'" />
              </div>
            </div>
          </transition>

          <v-spacer size="50px"></v-spacer>
          <h3 class="bs_centeredOnMobile">Reviews:</h3>
          <v-spacer size="2rem"></v-spacer>

          <div class="bs_row testimonials">
            <div class="bs_one">
              <card
                title="nate landau, cdo"
                description="'Kim's sunny personality and good humor show through in all her interactions within and without the digital team. While she has only worked here for a few months, she has already made herself an indispensible team member who explains the way, leads by example, and listens to all voices.<br><br>Kim is a not only a great manager, but a fantastic engineer as well. In her brief time at NYPR, she has completed a significant amount of work that has meaningfully moved the ball forward for our projects and code bases. She sets an example of speed and precision with her work.'"
              />
              <v-spacer size="1rem"></v-spacer>
            </div>
            <div class="bs_one">
              <card
                title="george ulloa, dev"
                description="'As Director of Development for my team at W2O, Kim
                  not only encouraged me but empowered me to really grow and sharpen my skills as a
                  developer.<br><br>Simply put, if you are looking for someone who is more than just a great
                  developer, but a great evangelist and leader, look no further
                  than Kim LaRocca. She is the person you can count on to lead, motivate, and make sure
                  that your team not only makes it to the finish line of any technical project but truly grow
                  on the way there.'"
              />
              <v-spacer size="1rem"></v-spacer>
            </div>
          </div>

          <div class="bs_centered">
            <a
              class="button margin-horizontal-05"
              href="https://managerreadme.com/readme/kimlarocca"
              target="_blank"
              rel="noopener noreferrer"
              >View My Manager Readme</a
            >
            <a
              class="button margin-horizontal-05"
              tabindex="0"
              @click="showReviews = !showReviews"
              v-on:keypress.enter="showReviews = !showReviews"
              v-on:keypress.space.prevent="showReviews = !showReviews"
            >
              <template v-if="!showReviews">check out more reviews</template>
              <template v-else>there's too many reviews!</template>
            </a>
          </div>
          <v-spacer v-if="!showReviews" size="100px"></v-spacer>
        </div>
      </section>
    </div>
    <section class="bs_padding0">
      <div class="container">
        <transition name="slide-fade">
          <reviews v-if="showReviews" />
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import logos from '../assets/json/logos'
import Reviews from '../components/Reviews.vue'
import Card from './Card'
import VSpacer from './VSpacer'

export default {
  components: {
    Reviews,
    Card,
    VSpacer
  },
  data () {
    return {
      logos: logos,
      logoCategory: '',
      showReviews: false
    }
  },
  methods: {
    setCategory (category) {
      if (category === this.logoCategory) {
        this.logoCategory = ''
      } else {
        this.logoCategory = ''
        this.$nextTick(() => {
          this.logoCategory = category
        })
      }
    }
  },
  computed: {
    filteredLogos () {
      if (this.logoCategory === '') {
        return []
      }
      if (this.logoCategory === 'all') {
        return this.logos
      } else {
        return this.logos.filter(logo => {
          return logo.category
            .toLowerCase()
            .includes(this.logoCategory.toLowerCase())
        })
      }
    }
  }
}
</script>
