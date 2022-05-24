<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <Table :products="products" @add:cart="addToCart" />
      </div>
      <div class="column">
        <Cart
          v-if="isNotPayment"
          :carts="carts"
          :products="products"
          :members="members"
          @add:order="addOrder"
          @show:payment="showPayment"
        />
        <Payment
          v-else
          :order="latestOrder"
          :cartsData="cartsData"
          @payment:order="makePayment"
          @cancel:order="makeCancel"
        />
        <VueHtml2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="false"
          :preview-modal="true"
          filename="receipt"
          :pdf-quality="2"
          :manual-pagination="true"
          pdf-format="a4"
          pdf-orientation="portrait"
          ref="html2Pdf"
        >
          <section slot="pdf-content" style="margin: 20px">
            <Receipt :carts="carts" :printData="printData" />
          </section>
        </VueHtml2pdf>
      </div>
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'
import Table from '@/components/sales/Table.vue'
import Cart from '@/components/sales/Cart.vue'
import Payment from '@/components/sales/Payment.vue'
import Receipt from '@/components/sales/Receipt.vue'

export default {
  name: 'SalesPage',
  components: {
    Table,
    Cart,
    Payment,
    Receipt,
    VueHtml2pdf,
  },
  data() {
    return {
      products: [],
      members: [],
      carts: [],
      cartsData: [],
      isNotPayment: true,
      latestOrder: null,
      isSuccessPayment: false,
      printData: null,
    }
  },

  methods: {
    async getProducts() {
      const { data } = await this.$http.get('/products')
      this.products = data.filter((product) => product.quantity > 0)
    },

    async getMembers() {
      const { data } = await this.$http.get('/members')
      this.members = data
    },

    addToCart(product) {
      let productCart = {
        productId: product.id,
        quantity: 1,
        price: product.price,
      }

      let cartData = {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        total: 0,
      }

      if (this.carts.length === 0) {
        this.carts.push(productCart)

        cartData.total += cartData.price

        this.cartsData.push(cartData)
      } else {
        this.checkCart(productCart, cartData)
      }
    },

    checkCart(product, cartData) {
      let isNotFound = true
      for (const i in this.carts) {
        if (product.productId === this.carts[i].productId) {
          isNotFound = false
          this.carts[i].quantity += 1
          break
        }
      }
      if (isNotFound) {
        this.carts.push(product)
      }

      isNotFound = true
      for (const i in this.cartsData) {
        if (cartData.productId === this.cartsData[i].productId) {
          isNotFound = false
          this.cartsData[i].quantity += 1
          this.cartsData[i].total += cartData.price
          break
        }
      }

      if (isNotFound) {
        cartData.total += cartData.price
        this.cartsData.push(cartData)
      }
    },

    clearCart() {
      this.carts = []
    },

    async addOrder(order) {
      try {
        const { data } = await this.$http.post('/orders', order)
        this.showPayment(data)

        this.$sendSuccess('เพิ่มออร์เดอร์สำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    showPayment(data) {
      this.isNotPayment = false
      this.latestOrder = data
    },

    async makePayment(order) {
      try {
        const { data } = await this.$http.put('/orders/payment', {
          orderId: order.id,
        })

        this.isNotPayment = true
        this.isSuccessPayment = true

        this.printData = data
        await this.$refs.html2Pdf.generatePdf()

        this.clearCart()

        this.$sendSuccess('ชำระเงินสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    async makeCancel(order) {
      try {
        await this.$http.put('/orders/cancel', {
          orderId: order.id,
        })
        this.isNotPayment = true
        this.clearCart()

        this.$sendSuccess('ยกเลิกสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },
  },

  async mounted() {
    await this.getProducts()
    await this.getMembers()
  },
}
</script>
