<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">แก้ไขประเภทสินค้า</p>
    </header>

    <div class="card-content">
      <b-field label="ID" horizontal>
        <b-input type="text" v-model="category.id" disabled></b-input>
      </b-field>

      <b-field label="ชื่อ" horizontal>
        <b-input type="text" v-model="category.name" required></b-input>
      </b-field>

      <b-field horizontal>
        <b-button
          type="is-success"
          icon-left="pen"
          @click="editCategory"
          :disabled="!category.name"
        >
          แก้ไขประเภทสินค้า
        </b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },

  methods: {
    editCategory() {
      const editCategory = {
        categoryId: this.category.id,
        name: this.category.name,
      }

      this.$emit('edit:category', editCategory)
    },
  },
}
</script>
