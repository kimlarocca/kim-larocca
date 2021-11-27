<template>

  <div class="card">
    <figure>
      <img v-if="hasImage" :src="image" :alt="title">
      <v-spacer v-if="hasImage"/>
      <figcaption>{{ title }}</figcaption>
    </figure>
    <p v-html="description" />
  </div>

</template>

<script>
  import VSpacer from './VSpacer'
  export default {
    name: 'Card',
    components: {
      VSpacer
    },
    props: {
      title: String,
      image: String,
      description: String
    },
    computed: {
      hasImage () {
        return !!this.$props.image
      }
    }
  }
</script>
