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
              <b-input placeholder="emp@gmail.com" type="email" required v-model="email"></b-input>
            </b-field>

            <b-field label="รหัสผ่าน">
              <b-input placeholder="password" type="password" required v-model="password"></b-input>
            </b-field>
            <br />
            <b-field>
              <b-button type="is-success" expanded @click="login" :disabled="!email || !password">เข้าสู่ระบบ</b-button>
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
      email: null,
      password: null,
    }
  },
  methods: {
    async login() {
      try {
        await this.$http.post(`/auth/login`, { email: this.email, password: this.password }, { withCredentials: true })

        const user = await this.$http.get(`/auth/verify`, { withCredentials: true })

        if (user.data.userTypeId === 1) {
          await this.$store.dispatch('admin', { data: user.data })
        } else if (user.data.userTypeId === 2) {
          await this.$store.dispatch('employee', { data: user.data })
        }

        this.$router.push('/')
      } catch (error) {
        this.email = null
        this.password = null

        this.$sendDanger('อีเมลหรือรหัสผ่านไม่ถูกต้อง!')
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin-top: 10%;
}
</style>
