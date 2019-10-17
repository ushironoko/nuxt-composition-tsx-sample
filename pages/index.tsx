import { createComponent, reactive, computed } from '@vue/composition-api'

interface State {
  count: number
  double: number
}

function increment(state: any) {
  state.count++
}

export default createComponent({
  setup() {
    const state: State = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    return () => (
      <div style="margin: 0 auto; min-height: 100vh; display: flex; justify-content: center; align-items: center;">
        <div>
          {`state: ${state.count}`}
        </div>
        <div>
          {`double: ${state.double}`}
        </div>
        <div>
          <button onClick={()=> increment(state)}>+</button>
        </div>
      </div>
    )
  }
})
