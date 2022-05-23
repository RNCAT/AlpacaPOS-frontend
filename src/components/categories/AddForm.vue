<template>
  <b-collapse class="card" animation="slide" :open="isEdit">
    <template #trigger="props">
      <div
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
        :aria-expanded="props.open"
      >
        <p class="card-header-title">เพิ่มประเภทสินค้า</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"> </b-icon>
        </a>
      </div>
    </template>

    <div class="card-content">
      <b-field label="ชื่อ" horizontal>
        <b-input type="text" placeholder="อาหารแมว" v-model="category.name" required></b-input>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="plus"
          @click="addCategory"
          :disabled="!category.name"
        >
          เพิ่มประเภทสินค้า
        </b-button>
      </b-field>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'AddForm',
  props: {
    isEdit: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      category: {
        name: '',
      },
    }
  },

  methods: {
    addCategory() {
      this.$emit('add:category', this.category)

      this.category.name = null
    },
  },
}
</script>
