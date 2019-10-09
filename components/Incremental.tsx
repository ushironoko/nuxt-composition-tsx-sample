import { createComponent, PropType, reactive } from '@vue/composition-api'

interface IncrementalObjProps {
  buttonText: string
  value: number
}

export default createComponent({
  props: {
    incrementalObj: {
      type: Object as PropType<IncrementalObjProps>,
      required: true
    },
    digits: {
      type: Number,
      required: true
    }
  },
  setup({ incrementalObj, digits },{ emit }) {
    const r = reactive({count: incrementalObj.value})
    return () => (
      <div>
        <div>{r.count}</div>
        <button onClick={() => {
            r.count++
            emit('countUp', { count:r.count, digits } )
          } } >{incrementalObj.buttonText}</button>
      </div>
    )
  }
})
