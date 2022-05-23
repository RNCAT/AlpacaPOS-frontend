<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths">
        <Table
          :isLoading="isLoading"
          :employees="employees"
          @toggleEdit:employee="toggleEdit"
          @delete:employee="deleteEmployee"
        />
      </div>
      <div class="column">
        <AddForm :isEdit="!isEdit" @add:employee="addEmployee" /> <br />
        <EditForm v-if="isEdit" :employee="selectEmployee" @edit:employee="editEmployee" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/employees/Table.vue'
import AddForm from '@/components/employees/AddForm.vue'
import EditForm from '@/components/employees/EditForm.vue'

export default {
  name: 'EmployeesPage',
  components: {
    Table,
    AddForm,
    EditForm,
  },
  data() {
    return {
      employees: [],
      selectEmployee: null,
      isLoading: true,
      isEdit: false,
    }
  },

  methods: {
    async getEmployees() {
      const { data } = await this.$http.get('/employees')
      this.employees = data
      this.isLoading = false
    },

    async addEmployee(newEmployee) {
      try {
        await this.$http.post('/employees', newEmployee)
        await this.getEmployees()

        this.$sendSuccess('เพิ่มข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    toggleEdit(employee) {
      this.selectEmployee = employee
      this.isEdit = true
    },

    async editEmployee(employee) {
      try {
        await this.$http.put('/employees', employee)
        await this.getEmployees()

        this.isEdit = false
        this.$sendSuccess('แก้ไขข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    async deleteEmployee(employeeId) {
      try {
        await this.$http.delete(`/employees/${employeeId}`)
        await this.getEmployees()

        this.$sendSuccess('ลบข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },
  },

  async mounted() {
    await this.getEmployees()
  },
}
</script>
