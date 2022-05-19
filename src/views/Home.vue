<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <Card :body="body" />
      </div>
      <div class="column">
        <Card :body="body" />
      </div>
      <div class="column">
        <Card :body="body" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/dashboard/Card.vue'

export default {
  name: 'HomePage',
  components: {
    Card,
  },
  data() {
    return {
      body: {
        title: 'แมว',
        value: 'อัลปาก้า',
      },
    }
  },

  async mounted() {},
}
</script>
