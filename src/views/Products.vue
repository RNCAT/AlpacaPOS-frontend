<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths">
        <Table
          :isLoading="isLoading"
          :products="products"
          @toggleEdit:product="toggleEdit"
          @delete:product="deleteProduct"
        />
      </div>
      <div class="column">
        <AddForm :isEdit="!isEdit" :categories="categories" @add:product="addProduct" /> <br />
        <EditForm
          v-if="isEdit"
          :product="selectProduct"
          :categories="categories"
          @edit:product="editProduct"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/products/Table.vue'
import AddForm from '@/components/products/AddForm.vue'
import EditForm from '@/components/products/EditForm.vue'

export default {
  name: 'ProductsPage',
  components: {
    Table,
    AddForm,
    EditForm,
  },
  data() {
    return {
      products: [],
      categories: [],
      selectProduct: null,
      isLoading: true,
      isEdit: false,
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

    toggleEdit(product) {
      this.selectProduct = product
      this.isEdit = true
    },

    async editProduct(product) {
      try {
        await this.$http.put('/products', product)
        await this.getProducts()

        this.isEdit = false
        this.$sendSuccess('แก้ไขข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    async deleteProduct(productId) {
      try {
        await this.$http.delete(`/products/${productId}`)
        await this.getProducts()

        this.$sendSuccess('ลบข้อมูลสำเร็จ')
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
