<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <EmployeeReport
          :isLoading="isLoading"
          :employees="employees"
          :employeeSell="employeeSell"
          @getEmployee:sell="getemployeeSell"
        />
      </div>
      <div class="column">
        <div class="columns">
          <div class="column">
            <BestCategory :name="bestCategoryName" />
          </div>
          <div class="column">
            <BestSeller :name="bestSellerName" />
          </div>
        </div>
        <br />
        <MonthlySell :MonthlySell="monthlySell" @getMonthly:sell="getMonthlySell" />
      </div>
    </div>
  </div>
</template>

<script>
import BestSeller from '@/components/reports/BestSeller.vue'
import BestCategory from '@/components/reports/BestCategory.vue'
import EmployeeReport from '@/components/reports/EmployeeReport.vue'
import MonthlySell from '@/components/reports/MonthlySell.vue'

export default {
  name: 'ReportsPage',
  components: {
    BestSeller,
    BestCategory,
    EmployeeReport,
    MonthlySell,
  },
  data() {
    return {
      isLoading: true,
      employees: [],
      bestSellerName: '',
      bestCategoryName: '',
      employeeSell: null,
      monthlySell: null,
    }
  },

  methods: {
    async getEmployees() {
      const { data } = await this.$http.get('/employees')
      this.employees = data
      this.isLoading = false
    },

    async getBestSeller() {
      const { data } = await this.$http.get('/reports/bestseller')
      this.bestSellerName = data.product.name
    },

    async getBestCategory() {
      const { data } = await this.$http.get('/reports/bestcategory')
      this.bestCategoryName = data.product.category.name
    },

    async getemployeeSell(employeeId) {
      const { data } = await this.$http.post('/reports/employeesell', { employeeId })
      this.employeeSell = data
      console.log(this.employeeSell)
    },

    async getMonthlySell(selectDate) {
      const { data } = await this.$http.post('/reports/sellbymonth', { date: selectDate.toJSON() })
      this.monthlySell = data
      console.log(this.monthlySell)
    },
  },

  async mounted() {
    await this.getBestSeller()
    await this.getBestCategory()
    await this.getEmployees()
  },
}
</script>
