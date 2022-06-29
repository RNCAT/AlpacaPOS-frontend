<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">ระบบขายหน้าร้านบนเว็บแอปพลิเคชัน</p>
          </header>
          <div class="card-content">
            <b-field label="อีเมล">
              <b-input placeholder="emp@gmail.com" type="email" required v-model="user.email"></b-input>
            </b-field>

            <b-field label="รหัสผ่าน">
              <b-input placeholder="password" type="password" required v-model="user.password"></b-input>
            </b-field>
            <br />
            <b-field>
              <b-button type="is-success" expanded @click="login" :disabled="!user.email || !user.password"
                >เข้าสู่ระบบ</b-button
              >
            </b-field>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    async login() {
      console.log('logged in!')

      await this.$store.dispatch('employee', { data: 'test' })
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 10%;
}
</style>
