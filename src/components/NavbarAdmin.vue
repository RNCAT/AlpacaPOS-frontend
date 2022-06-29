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
      <b-navbar-item tag="router-link" :to="{ path: '/stocks' }">
        <i class="fas fa-truck-loading" />
        สต็อก
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/reports' }">
        <i class="fas fa-book" />
        รายงาน
      </b-navbar-item>
      <b-navbar-dropdown label="จัดการ">
        <b-navbar-item tag="router-link" :to="{ path: '/products' }">
          <i class="fas fa-boxes" />
          สินค้า
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/categories' }">
          <i class="fas fa-list" />
          ประเภทสินค้า
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/members' }">
          <i class="fas fa-users" />
          สมาชิก
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/employees' }">
          <i class="fas fa-user-tie" />
          พนักงาน
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b>{{ $store.state.admin.data.firstname }} {{ $store.state.admin.data.lastname }}</b>
          <a class="button is-danger" @click="logout"> ออกจากระบบ</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarAdmin',
  methods: {
    async logout() {
      await this.$http.get('/auth/logout', { withCredentials: true })

      await this.$store.dispatch('admin', null)

      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>
i {
  margin-right: 5px;
}

a {
  margin-left: 20px;
}
</style>
