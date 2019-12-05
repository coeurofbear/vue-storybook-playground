<template>
  <table>
    <GTableRow
      v-for="(values, index) in items"
      :key="index"
      :values="values"
    />
  </table>
</template>

<script>
import GTableRow from '@coeurofbear/g-table-row/GTableRow'
export default {
  name: 'GTable',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    GTableRow
  }
}
</script>
