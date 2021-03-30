export default {
  props: {
    validators: {
      type: Array,
      default: () => []
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    length: {
      type: Number,
      default: 0
    },
    compareTo: {
      type: String,
      default: ''
    },
    compareMessage: {
      type: String,
      default: ''
    }
  }
}