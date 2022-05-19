<template>
  <div>
    <Navbar /><br />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;500&display=swap');

* {
  font-family: 'Kanit', sans-serif;
}
</style>
