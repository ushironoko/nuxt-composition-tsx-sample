<template>
  <div>{{ a }}
    <Increment @hoge="hogeFunc"></Increment>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { a, hogeFunc } from '~/compositions/a'
import Increment from '~/components/Increment'

export default Vue.extend({
  asyncData() {
    return {}
  },
  components: {
    Increment
  },
  setup(props, ctx) {
    return { a, hogeFunc }
  }
})
</script>
