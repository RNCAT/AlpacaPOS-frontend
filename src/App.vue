<template>
  <div>
    <NavbarAdmin v-if="this.$store.state.admin" />
    <NavbarEmployee v-if="this.$store.state.employee" /><br />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import NavbarEmployee from '@/components/NavbarEmployee.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    NavbarAdmin,
    NavbarEmployee,
  },

  computed: {
    ...mapGetters(['admin', 'employee']),
  },

  async created() {
    if (!this.$store.state.admin || !this.$store.state.employee) {
      this.$router.push('/login')
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;500&display=swap');

* {
  font-family: 'Kanit', sans-serif;
}
</style>
