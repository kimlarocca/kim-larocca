<template>
  <section id="who">
    <v-spacer size="100px"></v-spacer>
    <div class="container">
      <h2>Professional since 1999.</h2>
      <v-spacer size="100px"></v-spacer>
      <div class="bs_row">
        <div class="bs_one bs_margin30">
          <figure>
            <img src="/images/kim.jpg" alt="photo of kim playing bass guitar and singing">
            <figcaption>let's rock</figcaption>
          </figure>
        </div>
        <div class="bs_two left-margin right-margin">
          <div>
            <p>I have been designing websites since my first geocities page back in the 1990s! It may or
              may not have been dedicated to Final Fantasy VII...</p>
            <v-spacer/>
            <p>I
              hold a Computer Science degree from Rutgers University as well as a degree in Italian.
              My first paying client was in
              1999, and I still do work for her to this day. Since then, I've worked on high profile
              websites for clients such as Intel, Pfizer,
              NBC,
              Merck, IBM, Bausch + Lomb,
              Novartis, AstraZeneca, Celgene, Visa, Intuitive Surgical, Roche, Toys"R"Us /
              Babies"R"Us,
              FAO Schwartz, Wharton and more.
            <p>
              <v-spacer/>
            <p>I currently lead the front end development team at iMedia, a marketing agency in Boonton NJ. In addition
              to managing the team, I act as an individual contributor. I am working to
              improve team efficiency by personally coding reusable Vue components and training the frontend developers
              on Vue & ES6. I am also working with the backend, creative and UX teams to streamline processes and
              build matching components in various CMSs, Photoshop, and Axure.</p>
            <v-spacer/>
            <p class="bs_margin40">When not working, you can find me rocking out with my cover band,
              playing dodgeball, reading crappy young adult fantasy novels, or playing minecraft with my kids. Sadly, I
              have not yet made time to build a Final Fantasy XV website.
            </p>
            <v-spacer/>
            <div class="bs_centeredOnMobile">
              <a class="button" target="_blank"
                 href="https://www.linkedin.com/in/kimlarocca/">view my resume on linkedin</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <v-spacer size="100px"></v-spacer>
  </section>
</template>

<script>
  import VSpacer from './VSpacer'

  export default {
    name: 'What',
    components: {
      VSpacer
    }
  }
</script>
