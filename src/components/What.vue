<template>
  <section id="what">
    <div class="container">
      <v-spacer size="100px"></v-spacer>
      <h2>I build creative websites from top to bottom.</h2>
      <v-spacer size="100px"></v-spacer>
      <div class="bs_row">
        <div class="bs_one">
          <card
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/design_lkttxc.jpg"
            title="design"
            description="I like to think of myself as an 'ultra stack' developer (yes, I made that up). I design award winning, tech driven websites with modern trends in mind."
          />
          <v-spacer size="2rem"></v-spacer>
        </div>
        <div class="bs_one">
          <card
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/develop_nzzwpu.jpg"
            title="develop"
            description="Until 'ultra stack' becomes a thing, I'm just an artsy full stack developer who likes to create beautiful responsive websites and is comfortable working on both the frontend and the backend."
          />
          <v-spacer size="2rem"></v-spacer>
        </div>
      </div>
      <div class="bs_row">
        <div class="bs_one">
          <card
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/test_wvh7wq.jpg"
            title="test"
            description="Between end-to-end testing, unit testing, automation, and good old-fashioned eyeballs on real devices, my websites are about as close to perfect as you can get."
          />
          <v-spacer size="2rem"></v-spacer>
        </div>
        <div class="bs_one">
          <card
            image="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/deploy_pfrsq9.jpg"
            title="deploy"
            description="Need DevOps? Whether it's building servers or setting up continuous integration, I'll create and maintain your application environments wherever they may be."
          />
          <v-spacer size="2rem"></v-spacer>
        </div>
      </div>
      <v-spacer size="100px"></v-spacer>
    </div>
  </section>
</template>

<script>
import Card from './Card'
import VSpacer from './VSpacer'

export default {
  name: 'What',
  components: {
    Card,
    VSpacer
  }
}
</script>
