<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://cdn.discordapp.com/attachments/683201747921010718/973555692935995422/AlpacaPOS2.1.png"
          alt="AlpacaPOS Logo"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <i class="fas fa-th-large" />
        แดชบอร์ด
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/sales' }">
        <i class="fas fa-shopping-cart" />
        การขาย
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <a class="button is-danger" @click="logout"> ออกจากระบบ</a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarEmployee',
  methods: {
    async logout() {
      await this.$store.dispatch('employee', null)
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
i {
  margin-right: 5px;
}
</style>
