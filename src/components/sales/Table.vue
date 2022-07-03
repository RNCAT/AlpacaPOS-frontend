<template>
  <div class="card">
    <div class="card-content">
      <b-table :data="products" paginated per-page="10">
        <b-table-column field="name" label="ชื่อสินค้า" searchable v-slot="props">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column field="quantity" label="จำนวนคงเหลือ" sortable v-slot="props">
          {{ props.row.quantity }}
        </b-table-column>

        <b-table-column field="price" label="ราคา" sortable v-slot="props"> {{ props.row.price }} ฿ </b-table-column>

        <b-table-column v-slot="props">
          <b-button type="is-success" icon-left="cart-plus" @click="addToCart(props.row)" expanded>เพิ่ม</b-button>
        </b-table-column>

        <template #empty>
          <div class="has-text-centered">
            <i class="fas fa-times"></i>
            ไม่มีสินค้า
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  methods: {
    async addToCart(product) {
      this.$emit('add:cart', product)
    },
  },
}
</script>
