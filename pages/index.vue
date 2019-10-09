<template>
  <div class="container">
    <GanahaBirthday
      :birthdayNumbers="birthdayNumbers"/>
    <Incremental
      v-for="(birthdayNumber, i) in birthdayNumbers"
      :key="String(i)"
      :incrementalObj="propObj"
      :digits="i"
      @countUp="setNumbers"
    />
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import GanahaBirthday from '~/components/GanahaBirthday'
import Incremental from '~/components/Incremental'

export default createComponent({
  components: {
    GanahaBirthday,
    Incremental
  },
  setup() {
    let birthdayNumbers = ref([0,0,0,0])

    const setNumbers = (payload: any) => {
      birthdayNumbers.value[payload.digits] = payload.count
    }

    const propObj = {
      buttonText: '＋',
      value: 0
    }

    return { propObj, birthdayNumbers, setNumbers }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
