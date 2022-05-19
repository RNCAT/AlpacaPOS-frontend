<template>
  <b-collapse class="card" animation="slide" :open="isEdit">
    <template #trigger="props">
      <div
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
        :aria-expanded="props.open"
      >
        <p class="card-header-title">เพิ่มสินค้า</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"> </b-icon>
        </a>
      </div>
    </template>

    <div class="card-content">
      <b-field label="ชื่อ" horizontal>
        <b-input type="text" placeholder="อาหารแมวมีโอ" v-model="product.name" required></b-input>
      </b-field>

      <b-field label="ราคา" horizontal>
        <b-input type="number" placeholder="60" min="1" v-model="product.price" required></b-input>
      </b-field>

      <b-field label="ประเภท" horizontal>
        <b-select placeholder="เลือกประเภทสินค้า" v-model="product.categoryId" required>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </b-select>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="plus"
          @click="addProduct"
          :disabled="!product.name || !product.price || !product.categoryId"
        >
          เพิ่มสินค้า
        </b-button>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'AddForm',
  props: {
    isEdit: {
      type: Boolean,
      required: true,
    },
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
