<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">ตะกร้า</p>
    </header>
    <div class="card-content">
      <b-field label="สมาชิก" horizontal>
        <b-select placeholder="เลือกสมาชิก" required expanded v-model="selectMember">
          <option value="0">ไม่มี</option>
          <option v-for="member in members" :value="member.id" :key="member.id">
            {{ member.firstname }} {{ member.lastname }}
          </option>
        </b-select>
      </b-field>

      <b-table :data="carts" hoverable>
        <b-table-column field="name" label="ชื่อสินค้า" v-slot="props">
          {{ getName(props.row.productId) }}
        </b-table-column>

        <b-table-column field="price" label="ราคา" sortable centered v-slot="props">
          {{ getPrice(props.row.productId) }} ฿
        </b-table-column>

        <b-table-column field="quantity" label="จำนวน" sortable centered v-slot="props">
          {{ props.row.quantity }}
        </b-table-column>

        <b-table-column label="รวม" sortable centered v-slot="props">
          {{ props.row.quantity * props.row.price }} ฿
        </b-table-column>

        <b-table-column v-slot="props">
          <b-button type="is-danger" @click="removeCart(props.row)">ลบ</b-button>
        </b-table-column>

        <template #empty>
          <div class="has-text-centered">
            <i class="fas fa-times"></i>
            ไม่มีสินค้าในตะกร้า
          </div>
        </template>
      </b-table>

      <b-field>
        <b-button
          type="is-success"
          icon-left="shopping-basket"
          :disabled="!selectMember || !carts.length"
          expanded
          size="is-medium"
          @click="makeOrder"
        >
          ชำระเงิน
        </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    carts: {
      type: Array,
      required: true,
    },
    members: {
      type: Array,
      required: true,
    },
    products: {
      type: Array,
    },
  },

  data() {
    return {
      selectMember: null,
      order: {
        orderDetails: [],
        memberId: 0,
        userId: 1,
      },
    }
  },

  methods: {
    removeCart(cart) {
      const index = this.carts.indexOf(cart)

      if (cart.quantity > 1) {
        for (const i in this.carts) {
          if (cart.productId === this.carts[i].productId) {
            this.carts[i].quantity -= 1
            break
          }
        }
      } else {
        for (const i in this.carts) {
          if (cart.productId === this.carts[i].productId) {
            this.carts.splice(index, 1)
            break
          }
        }
      }
    },

    async makeOrder() {
      this.order.orderDetails = this.carts

      if (this.selectMember !== 0) {
        this.order.memberId = Number(this.selectMember)
      }

      this.$emit('add:order', this.order)

      this.order = null
    },

    getName(id) {
      const { name } = this.products.find((product) => product.id === id)

      return name
    },

    getPrice(id) {
      const { price } = this.products.find((product) => product.id === id)

      return price
    },
  },
}
</script>
