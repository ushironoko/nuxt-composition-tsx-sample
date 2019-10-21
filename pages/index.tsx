import { createComponent, reactive, computed, onMounted } from '@vue/composition-api'
import Increment from '../components/Increment'

interface State {
  count: number
  double: number
}

function increment(state: any) {
  state.count++
}

export default createComponent({
  components: {
    Increment
  },
  setup() {
    const state: State = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    return () => (
      <div style="margin: 0 auto; min-height: 100vh; display: flex; justify-content: center; align-items: center;">
        <Increment state={state} increment={increment} />
      </div>
    )
  }
})
