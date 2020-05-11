<template>
  <div class="card">
    <CardBook />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardBook from '@/components/CardBook.vue'
@Component({
  components: {
    CardBook
  }
})
export default class extends Vue {}
</script>
