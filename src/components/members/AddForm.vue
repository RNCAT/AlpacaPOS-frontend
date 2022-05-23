<template>
  <b-collapse class="card" animation="slide" :open="isEdit">
    <template #trigger="props">
      <div
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
        :aria-expanded="props.open"
      >
        <p class="card-header-title">เพิ่มสมาชิก</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"> </b-icon>
        </a>
      </div>
    </template>

    <div class="card-content">
      <b-field label="อีเมล" horizontal>
        <b-input
          type="email"
          placeholder="member@gmail.com"
          v-model="member.email"
          required
        ></b-input>
      </b-field>

      <b-field label="ชื่อ" horizontal>
        <b-input type="text" placeholder="สมชาย" v-model="member.firstname" required></b-input>
      </b-field>

      <b-field label="นามสกุล" horizontal>
        <b-input type="text" placeholder="ขายไก่" v-model="member.lastname" required></b-input>
      </b-field>

      <b-field label="เบอร์โทรศัพท์" horizontal>
        <b-input
          type="tel"
          placeholder="0629989464"
          maxlength="10"
          pattern="[0-9]{10}"
          v-model="member.phone"
          required
        ></b-input>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="plus"
          @click="addMember"
          :disabled="!member.email || !member.firstname || !member.lastname || !member.phone"
        >
          เพิ่มประเภทสินค้า
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
      member: {
        email: '',
        firstname: '',
        lastname: '',
        phone: '',
      },
    }
  },

  methods: {
    addMember() {
      this.$emit('add:member', this.member)

      this.member.email = null
      this.member.firstname = null
      this.member.lastname = null
      this.member.phone = null
    },
  },
}
</script>
