<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">แก้ไขพนักงาน</p>
    </header>

    <div class="card-content">
      <b-field label="ID" horizontal>
        <b-input type="text" v-model="employee.id" disabled></b-input>
      </b-field>

      <b-field label="อีเมล" horizontal>
        <b-input
          type="email"
          placeholder="employee@gmail.com"
          v-model="employee.email"
          required
        ></b-input>
      </b-field>

      <b-field label="รหัสผ่าน" horizontal>
        <b-input type="text" v-model="employee.newPassword" required></b-input>
      </b-field>

      <b-field label="ชื่อ" horizontal>
        <b-input type="text" placeholder="สมชาย" v-model="employee.firstname" required></b-input>
      </b-field>

      <b-field label="นามสกุล" horizontal>
        <b-input type="text" placeholder="ขายไก่" v-model="employee.lastname" required></b-input>
      </b-field>

      <b-field label="เบอร์โทรศัพท์" horizontal>
        <b-input
          type="tel"
          placeholder="0629989464"
          pattern="[0-9]{10}"
          v-model="employee.phone"
          required
        ></b-input>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="pen"
          @click="editEmployee"
          :disabled="
            !employee.email ||
            !employee.password ||
            !employee.firstname ||
            !employee.lastname ||
            !employee.phone
          "
        >
          แก้ไขพนักงาน
        </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },

  methods: {
    editEmployee() {
      const editEmployee = {
        employeeId: this.employee.id,
        email: this.employee.email,
        password: this.employee.newPassword,
        firstname: this.employee.firstname,
        lastname: this.employee.lastname,
        phone: this.employee.phone,
      }

      this.$emit('edit:employee', editEmployee)
    },
  },
}
</script>
