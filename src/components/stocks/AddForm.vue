<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">เพิ่มสต็อก</p>
    </header>
    <div class="card-content">
      <b-field label="สินค้า" horizontal>
        <b-select placeholder="เลือกสินค้า" v-model="stock.productId" required>
          <option v-for="product in products" :key="product.id" :value="product.id">
            {{ product.name }}
          </option>
        </b-select>
      </b-field>

      <b-field label="จำนวน" horizontal>
        <b-input type="number" placeholder="10" min="1" v-model="stock.quantity" required></b-input>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="plus"
          @click="addStock"
          :disabled="!stock.productId || !stock.quantity"
        >
          เพิ่มสต็อก
        </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      stock: {
        productId: 0,
        quantity: 0,
      },
    }
  },

  methods: {
    async addStock() {
      this.stock.quantity = Number(this.stock.quantity)
      this.$emit('add:stock', this.stock)

      this.stock.productId = 0
      this.stock.quantity = 0
    },
  },
}
</script>
