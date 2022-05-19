<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths">
        <Table :isLoading="isLoading" :stocks="stocks" />
      </div>
      <div class="column">
        <AddForm :products="products" @add:stock="addStock" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/stocks/Table.vue'
import AddForm from '@/components/stocks/AddForm.vue'

export default {
  name: 'StocksPage',
  components: {
    Table,
    AddForm,
  },

  data() {
    return {
      products: [],
      stocks: [],
      isLoading: true,
    }
  },

  methods: {
    async getProducts() {
      const { data } = await this.$http.get('/products')
      this.products = data
    },

    async getStocks() {
      const { data } = await this.$http.get('/stocks')
      this.stocks = data
      this.isLoading = false
    },

    async addStock(stock) {
      try {
        await this.$http.post('/stocks', stock)
        await this.getStocks()

        this.$sendSuccess('เพิ่มข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },
  },

  async mounted() {
    await this.getStocks()
    await this.getProducts()
  },
}
</script>
