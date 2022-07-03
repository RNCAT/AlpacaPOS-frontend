<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">ส่วนลดสำหรับสมาชิก</p>
    </header>
    <div class="card-content">
      <b-field label="ส่วนลด %" horizontal>
        <b-input type="number" min="0" max="100" v-model="discount" required></b-input>
      </b-field>

      <b-field horizontal>
        <b-button type="is-warning" icon-left="pen" :disabled="!discount" @click="editDiscount"> แก้ไขส่วนลด </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Discount',
  props: ['discount'],

  methods: {
    editDiscount() {
      this.$emit('edit:discount', this.discount)
    },
  },
}
</script>
