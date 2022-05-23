<template>
  <b-collapse class="card" animation="slide" :open="isEdit">
    <template #trigger="props">
      <div
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
        :aria-expanded="props.open"
      >
        <p class="card-header-title">เพิ่มพนักงาน</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"> </b-icon>
        </a>
      </div>
    </template>

    <div class="card-content">
      <b-field label="อีเมล" horizontal>
        <b-input
          type="email"
          placeholder="emp@gmail.com"
          v-model="employee.email"
          required
        ></b-input>
      </b-field>

      <b-field label="รหัสผ่าน" horizontal>
        <b-input type="text" v-model="employee.password" required></b-input>
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
          maxlength="10"
          pattern="[0-9]{10}"
          v-model="employee.phone"
          required
        ></b-input>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="plus"
          @click="addEmployee"
          :disabled="
            !employee.email ||
            !employee.password ||
            !employee.firstname ||
            !employee.lastname ||
            !employee.phone
          "
        >
          เพิ่มพนักงาน
        </b-button>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'AddForm',
  props: {
    isEdit: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      employee: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phone: '',
      },
    }
  },

  methods: {
    addEmployee() {
      this.$emit('add:employee', this.employee)

      this.employee.email = null
      this.employee.password = null
      this.employee.firstname = null
      this.employee.lastname = null
      this.employee.phone = null
    },
  },
}
</script>
