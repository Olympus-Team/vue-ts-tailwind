<template>
  <div class="card text-center">
    <h2 class="card-name">{{ person.fullName }}</h2>
    <img :src="'https://robohash.org/' + person.fullName" />
    <v-rating v-model="rating" background-color="indigo lighten-3" color="indigo" size="50"></v-rating>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Person } from '@/types'

@Component({})
export default class Card extends Vue {
  private rating: number = 2
  @Prop({
    type: Object,
    required: true
  })
  readonly person!: Person
}
</script>

<style lang="scss" scoped>
.card {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
  .card-name {
    @apply text-center text-gray-900 border-red-300 text-yellow-600;
    @screen lg {
      @apply text-red-600;
    }
  }
}
</style>
