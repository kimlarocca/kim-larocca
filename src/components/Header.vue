<template>
  <header id="top">
    <nav>
      <input id="toggle" type="checkbox">
      <label for="toggle" class="hamburger" :class="{'black': scrollPosition > windowHeight}">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
      </label>

      <ul id="menu">
        <a href="#what" class="nav-link">
          <li>What I Do</li>
        </a>
        <a href="#work" class="nav-link">
          <li>My Work</li>
        </a>
        <a href="#who" class="nav-link">
          <li>Who I Am</li>
        </a>
        <a href="#why" class="nav-link">
          <li>Why Me?</li>
        </a>
        <a href="#contact" class="nav-link">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        scrollPosition: null,
        windowHeight: 0
      }
    },
    methods: {
      updateScroll () {
        this.scrollPosition = window.scrollY
      }
    },
    mounted () {
      this.windowHeight = window.innerHeight
      window.addEventListener('scroll', this.updateScroll)
    }
  }
</script>
