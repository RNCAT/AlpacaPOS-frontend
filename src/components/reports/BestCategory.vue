<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">ประเภทสินค้าขายดีที่สุด</p>
    </header>
    <div class="card-content">
      <p class="title has-text-centered">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name'],
}
</script>
