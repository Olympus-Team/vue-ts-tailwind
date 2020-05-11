<template>
  <div class="card-book">
    <img class="w-2/4 float-left" src="@/assets/images/card-cover.jpg" alt="card" />
    <div class="w-2/4 px-2 py-2 float-right">
      <span class="text-xs text-gray-700">Kevin Kwan</span>
      <h1 class="font-bold text-sm">Crazy rich asians</h1>
      <div class="flex justify-between items-center">
        <v-rating v-model="rating" color="#F2C94C" size="10"></v-rating>
        <span class="text-xs text-gray-700">252 reviews</span>
      </div>
      <p class="text-xs text-gray-700 mt-1 leading-none">
        the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip
      </p>
      <span class="font-bold text-sm">$4.99</span>
      <span class="text-gray-600 text-xs line-through">$24.12</span>
      <v-btn small class="uppercase w-full" outlined color="indigo">Buy Now</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class CardBook extends Vue {
  private rating: number = 2
}
</script>
<style lang="scss">
.card-book {
  .v-rating .v-icon {
    padding: 0.1rem 0.25rem 0.25rem 0;
  }
}
</style>
