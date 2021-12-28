<template>
  <div class="card">
    <figure>
      <img v-if="hasImage" :src="image" :alt="title" />
      <v-spacer v-if="hasImage" />
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
    VSpacer,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasImage() {
      return !!this.$props.image
    },
  },
}
</script>
