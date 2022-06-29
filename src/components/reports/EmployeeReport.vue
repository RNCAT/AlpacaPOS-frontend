<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">ยอดขายพนักงาน</p>
    </header>
    <div class="card-content">
      <b-field label="พนักงาน" horizontal>
        <b-select placeholder="เลือกพนักงาน" v-model="employeeId" required expanded>
          <option v-for="employee in employees" :key="employee.id" :value="employee.id">
            {{ employee.firstname }} {{ employee.lastname }}
          </option>
        </b-select>

        <b-button type="is-success" icon-left="plus" @click="getemployeeSell" :disabled="!employeeId"> ค้นหา </b-button>
      </b-field>

      <div v-if="employeeSell">
        <br />
        <p class="title has-text-centered">ยอดขายทั้งหมด {{ employeeSell.totalSell }} บาท</p>

        <b-table :loading="isLoading" :data="employeeSell.orders" paginated per-page="10">
          <b-table-column field="updatedAt" label="วันที่" sortable v-slot="props">
            {{ new Date(props.row.updatedAt).toLocaleDateString() }}
          </b-table-column>

          <b-table-column field="total" label="รายได้" sortable v-slot="props">
            {{ props.row.total }} ฿
          </b-table-column>

          <template #empty>
            <div class="has-text-centered">
              <i class="fas fa-times"></i>
              ไม่มียอดขาย
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    employees: {
      type: Array,
      required: true,
    },
    employeeSell: {
      type: Object,
    },
  },

  data() {
    return {
      employeeId: null,
    }
  },

  methods: {
    getemployeeSell() {
      console.log(this.employeeId)
      this.$emit('getEmployee:sell', 1)
    },
  },
}
</script>
