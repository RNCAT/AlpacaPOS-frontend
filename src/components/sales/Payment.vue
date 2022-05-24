<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">ชำระเงิน</p>
    </header>

    <div class="card-content">
      <p class="title has-text-centered">รวมทั้งหมด {{ total }} บาท</p>

      <b-field label="ลูกค้าชำระเงิน" horizontal>
        <b-input name="paid" type="number" expanded v-model="paid"></b-input>
      </b-field>

      <b-field label="เงินทอน" horizontal>
        <b-input name="change" type="number" expanded v-model="getChange" disabled></b-input>
      </b-field>

      <b-field horizontal>
        <div class="buttons">
          <b-button
            type="is-success"
            icon-left="edit"
            size="is-medium"
            expanded
            :disabled="paid < total"
            @click="makePayment"
          >
            ชำระเงิน
          </b-button>
          <b-button type="is-danger" icon-left="ban" size="is-medium" expanded @click="makeCancel">
            ยกเลิก
          </b-button>
        </div>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  props: {
    order: {
      type: Object,
      required: true,
    },
    cartsData: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      total: 0,
      paid: 0,
      change: 0,
      printOrder: null,
    }
  },

  computed: {
    getChange() {
      return this.paid - this.total
    },
  },

  methods: {
    async makePayment() {
      this.$emit('payment:order', this.order)
    },

    async makeCancel() {
      this.$emit('cancel:order', this.order)
    },
  },

  mounted() {
    for (const i of this.cartsData) {
      this.total += i.total
    }
  },
}
</script>
