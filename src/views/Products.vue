<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths">
        <Table :isLoading="isLoading" :products="products" />
      </div>
      <div class="column">
        <AddForm :categories="categories" v-on:add:product="addProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/products/Table.vue'
import AddForm from '@/components/products/AddForm.vue'

export default {
  name: 'ProductsPage',
  components: {
    Table,
    AddForm,
  },
  data() {
    return {
      products: [],
      categories: [],
      isLoading: true,
    }
  },

  methods: {
    async getProducts() {
      const { data } = await this.$http.get('/products')
      this.products = data
      this.isLoading = false
    },

    async addProduct(newProduct) {
      try {
        await this.$http.post('/products', newProduct)
        await this.getProducts()

        this.$sendSuccess('เพิ่มข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    async getCategories() {
      const { data } = await this.$http.get('/categories')
      this.categories = data
    },
  },

  async mounted() {
    await this.getProducts()
    await this.getCategories()
  },
}
</script>
