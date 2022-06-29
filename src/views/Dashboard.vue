<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <Card :body="dailySell" />
      </div>
      <div class="column">
        <Card :body="bestSeller" />
      </div>
      <div class="column">
        <Card :body="totalSell" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/dashboard/Card.vue'

export default {
  name: 'DashboardPage',
  components: {
    Card,
  },
  data() {
    return {
      dailySell: {
        title: 'ยอดขายรายวัน',
        value: '',
      },
      totalSell: {
        title: 'ยอดขายทั้งหมด',
        value: '',
      },
      bestSeller: {
        title: 'สินค้าขายดี',
        value: 'ยังไม่มี',
      },

      today: null,
    }
  },

  methods: {
    async getDailySell() {
      const { data } = await this.$http.post('/reports/dailysell', { date: this.today })
      this.dailySell.value = `${data.total} บาท`
    },

    async getTotalSell() {
      const { data } = await this.$http.get('/reports/totalsell')
      this.totalSell.value = `${data.total} บาท`
    },

    async getDailyBestSeller() {
      const { data } = await this.$http.post('/reports/dailybestseller', { date: this.today })
      this.bestSeller.value = data.product?.name || 'ยังไม่มี'
    },
  },

  async mounted() {
    this.today = new Date().toJSON()

    await this.getDailySell()
    await this.getTotalSell()
    await this.getDailyBestSeller()
  },
}
</script>
