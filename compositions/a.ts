import { createComponent, reactive, computed, onMounted } from '@vue/composition-api'
export const hogeFunc = (payload: any) => {
  window.alert(payload)
}
export const a = () => {
  const a = reactive({
    a: 1
  })
  return a
}
