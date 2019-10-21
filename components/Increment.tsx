import { createComponent, PropType } from '@vue/composition-api'

interface State {
  count: number
  double: number
}

export default createComponent({
  props: {
    state: {
      type: Object as PropType<State>,
      required: true,
    },
    increment: {
      type: Function,
      required: true,
    }
  },
  setup({ state, increment }, { emit }) {
    return () => (
      <div>
        <div>
          {`state: ${state.count}`}
        </div>
        <div>
          {`double: ${state.double}`}
        </div>
        <div>
          <button onClick={()=> {
            emit('hoge', 'emitting')
            increment(state)}
          }>+</button>
        </div>
      </div>
    )
  },
})
