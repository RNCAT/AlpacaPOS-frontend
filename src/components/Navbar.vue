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
      <b-navbar-dropdown label="รายงาน">
        <b-navbar-item tag="router-link" :to="{ path: '/report-stock-import' }">
          <i class="fas fa-box-open" />
          การนำเข้าสินค้า
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/report-sales' }">
          <i class="fas fa-money-bill" />
          การขาย
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/report-stocks' }">
          <i class="fas fa-boxes" />
          สต็อก
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/report-best-seller' }">
          <i class="fas fa-chart-line" />
          สินค้าขายดี
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"> Log in </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
i {
  margin-right: 5px;
}
</style>
