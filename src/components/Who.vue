<template>
  <section id="who">
    <div class="dark-gray-bg white diagonal">
      <div class="container">
        <v-spacer size="100px"></v-spacer>
        <h2 class="white">Professional since 1999.</h2>
        <v-spacer size="100px"></v-spacer>
        <div class="bs_row">
          <div class="bs_one bs_margin30">
            <figure>
              <img
                src="https://res.cloudinary.com/kimlarocca/image/upload/f_auto/v1584805653/kimlarocca/portfolio/kim_nuoagb.jpg"
                alt="photo of kim playing bass guitar and singing"
              >
              <figcaption>let's rock</figcaption>
            </figure>
          </div>
          <div class="bs_two left-margin right-margin">
            <div>
              <p>I have been designing websites since my first geocities page back in the 1990s! It may or
                may not have been dedicated to Final Fantasy VII...</p>
              <v-spacer />
              <p>I
                hold a Computer Science degree from Rutgers University as well as a degree in Italian.
                My first paying client was in
                1999, and I still do work for her to this day. Since then, I've worked on high profile
                websites for clients such as Intel, Pfizer,
                NBC,
                Merck, IBM, Bausch + Lomb,
                Novartis, AstraZeneca, Celgene, Visa, Intuitive Surgical, Roche, Toys"R"Us /
                Babies"R"Us,
                FAO Schwartz, Wharton, WQXR, WNYC, The Gothamist and more.
              <p>
                <v-spacer />
              <p>I currently manage the engineering team for NY Public Radio. In addition
                to managing the team, I act as an individual contributor leading our design system initiative. I am working on migrating NYPR's websites from Ember to Vue, and improving team efficiency by creating reusable Vue components along the way. I've been training the frontend developers
                on Vue & ES6, and teaching the non-developers HTML & CSS skills. I am also working with the devops, design and product teams to streamline processes while acting as a developer evangelist.</p>
              <v-spacer />
              <p class="bs_margin40">When not working, you can find me rocking out with my cover band,
                                    playing dodgeball, reading crappy young adult fantasy novels, or playing minecraft with my kids. Sadly, I
                                    have not yet made time to build a Final Fantasy XV website.
              </p>
              <v-spacer />
              <div class="bs_centeredOnMobile">
                <a
                  class="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/kimlarocca/"
                >view my resume on linkedin</a>
              </div>
            </div>
          </div>
        </div>
        <v-spacer size="100px"></v-spacer>
      </div>
    </div>
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
