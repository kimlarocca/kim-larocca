<template>
  <div>
    <main>
      <hero/>
      <what/>
      <work/>
      <who/>
      <why/>
      <contact/>
    </main>
  </div>
</template>

<script>
  import Hero from '../components/Hero.vue'
  import What from '../components/What.vue'
  import Work from '../components/Work.vue'
  import Who from '../components/Who.vue'
  import Why from '../components/Why.vue'
  import Contact from '../components/Contact.vue'

  export default {
    name: 'Home',
    components: {
      Hero,
      What,
      Work,
      Who,
      Why,
      Contact
    }

  }
</script>
