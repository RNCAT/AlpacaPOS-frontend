<template>
  <div class="columns is-mobile" v-if="printData">
    <div class="column is-three-fifths is-offset-one-fifth">
      <h5 class="title has-text-centered">ใบเสร็จรับเงิน</h5>
      <h6 class="subtitle has-text-centered">
        วันที่ {{ new Date(printData.updatedAt).toLocaleDateString() }}
      </h6>
      <div class="content">
        <div
          class="columns is-mobile"
          v-for="orderDetail in printData.OrderDetail"
          :key="orderDetail.id"
        >
          <div class="column is-1">
            <p>{{ orderDetail.quantity }}</p>
          </div>
          <div class="column is-9">
            <p>{{ orderDetail.product.name }}</p>
          </div>
          <div class="column is-2">
            <p class="has-text-right">{{ orderDetail.price * orderDetail.quantity }}</p>
          </div>
        </div>

        <div class="columns is-mobile">
          <div class="column is-2">
            <p>รวม</p>
            <p>พนักงาน</p>
            <p>สมาชิก</p>
          </div>
          <div class="column is-10">
            <p class="has-text-right">
              <b>{{ printData.total }}</b>
            </p>
            <p class="has-text-right">
              {{ printData.user.firstname }} {{ printData.user.lastname }}
            </p>
            <p v-if="printData.member" class="has-text-right">
              {{ printData.member.firstname }} {{ printData.member.lastname }}
            </p>
            <p v-else class="has-text-right">ไม่มี</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Receipt',
  props: {
    carts: {
      type: Array,
      required: true,
    },
    printData: {
      required: false,
    },
  },
}
</script>
