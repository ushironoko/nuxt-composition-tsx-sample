import { createComponent, ref } from '@vue/composition-api'

const ganahaBirthday = '1010'

export default createComponent({
  props: {
    birthdayNumbers: {
      type: Array,
      required: true
    },
  },
  setup({ birthdayNumbers }) {
    const numbers = ref(`${birthdayNumbers[0]}${birthdayNumbers[1]}${birthdayNumbers[2]}${birthdayNumbers[3]}`)
    return () => (
      <div>
        <div>我那覇響の誕生日は？</div>
        <div>
          { numbers.value === ganahaBirthday
            ? '正解！'
            : '違うよ！'
          }
        </div>
        <div>
          { numbers.value }
        </div>
      </div>
    )
  }
})
