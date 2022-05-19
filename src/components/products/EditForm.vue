<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">แก้ไขสินค้า</p>
    </header>

    <div class="card-content">
      <b-field label="ID" horizontal>
        <b-input type="text" v-model="product.id" disabled></b-input>
      </b-field>

      <b-field label="ชื่อ" horizontal>
        <b-input type="text" v-model="product.name" required></b-input>
      </b-field>

      <b-field label="ราคา" horizontal>
        <b-input type="number" min="1" v-model="product.price" required></b-input>
      </b-field>

      <b-field label="ประเภท" horizontal>
        <b-select v-model="product.categoryId" required>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </b-select>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="pen"
          @click="editProduct"
          :disabled="!product.name || !product.price || !product.categoryId"
        >
          แก้ไขสินค้า
        </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  props: {
    product: {
      type: Object,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {}
  },

  methods: {
    editProduct() {
      const editProduct = {
        productId: this.product.id,
        name: this.product.name,
        price: Number(this.product.price),
        categoryId: this.product.categoryId,
      }

      this.$emit('edit:product', editProduct)
    },
  },
}
</script>
