<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ body.title }}</p>
    </header>
    <div class="card-content">
      <p class="title has-text-centered">{{ body.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['body'],
}
</script>
