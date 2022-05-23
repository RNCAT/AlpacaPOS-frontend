<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">แก้ไขสมาชิก</p>
    </header>

    <div class="card-content">
      <b-field label="ID" horizontal>
        <b-input type="text" v-model="member.id" disabled></b-input>
      </b-field>

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
          pattern="[0-9]{10}"
          v-model="member.phone"
          required
        ></b-input>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="pen"
          @click="editMember"
          :disabled="!member.email || !member.firstname || !member.lastname || !member.phone"
        >
          แก้ไขสมาชิก
        </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  props: {
    member: {
      type: Object,
      required: true,
    },
  },

  methods: {
    editMember() {
      const editMember = {
        memberId: this.member.id,
        email: this.member.email,
        firstname: this.member.firstname,
        lastname: this.member.lastname,
        phone: this.member.phone,
      }

      this.$emit('edit:member', editMember)
    },
  },
}
</script>
