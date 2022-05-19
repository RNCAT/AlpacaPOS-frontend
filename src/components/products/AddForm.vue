<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">เพิ่มสินค้า</p>
    </header>

    <div class="card-content">
      <b-field label="ชื่อ" horizontal>
        <b-input type="text" placeholder="อาหารแมวมีโอ" v-model="product.name"></b-input>
      </b-field>

      <b-field label="ราคา" horizontal>
        <b-input type="number" placeholder="60" min="1" v-model="product.price"></b-input>
      </b-field>

      <b-field label="ประเภท" horizontal>
        <b-select placeholder="เลือกประเภทสินค้า" v-model="product.categoryId">
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </b-select>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          @click="addProduct"
          :disabled="!product.name || !product.price || !product.categoryId"
        >
          เพิ่มสินค้า
        </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      product: {
        name: '',
        price: 0,
        categoryId: 0,
      },
    }
  },

  methods: {
    addProduct() {
      this.product.price = Number(this.product.price)

      this.$emit('add:product', this.product)

      this.product.name = null
      this.product.price = null
      this.product.categoryId = null
    },
  },
}
</script>
