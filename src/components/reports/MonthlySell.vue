<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">ยอดขายรายเดือน</p>
    </header>
    <div class="card-content">
      <b-field label="เดือน" horizontal>
        <b-datepicker
          type="month"
          placeholder="Click to select..."
          icon="calendar-today"
          trap-focus
          v-model="selectMonth"
        >
        </b-datepicker>

        <b-button type="is-success" icon-left="plus" @click="getMonthlySell" :disabled="!selectMonth"> ค้นหา </b-button>
      </b-field>

      <div v-if="MonthlySell">
        <br />
        <p class="title has-text-centered">ยอดขายทั้งหมด {{ MonthlySell.total }} บาท</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    MonthlySell: {
      type: Object,
    },
  },

  data() {
    return {
      selectMonth: null,
    }
  },

  methods: {
    getMonthlySell() {
      this.$emit('getMonthly:sell', this.selectMonth)
    },
  },
}
</script>
