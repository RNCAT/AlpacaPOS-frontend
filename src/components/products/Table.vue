<template>
  <div class="card">
    <div class="card-content">
      <b-table :loading="isLoading" :data="products" paginated per-page="10">
        <b-table-column field="name" label="ชื่อสินค้า" searchable v-slot="props">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column field="price" label="ราคา" sortable centered v-slot="props">
          {{ props.row.price }} ฿
        </b-table-column>

        <b-table-column field="quantity" label="จำนวน" sortable centered v-slot="props">
          {{ props.row.quantity }}
        </b-table-column>

        <b-table-column label="จัดการ" v-slot="props">
          <div class="buttons">
            <b-button type="is-warning" icon-right="edit" @click="toggleEdit(props.row)" />
            <b-button type="is-danger" icon-right="trash-alt" @click="confirmDelete(props.row)" />
          </div>
        </b-table-column>

        <template #empty>
          <div class="has-text-centered">
            <i class="fas fa-times"></i>
            ไม่มีสินค้า
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },

  methods: {
    toggleEdit(product) {
      this.$emit('toggleEdit:product', product)
    },

    confirmDelete(product) {
      this.$buefy.dialog.confirm({
        title: 'ลบสินค้า ',
        message: `คุณต้องการลบสินค้า: <b>${product.name}</b> ?`,
        type: 'is-danger',
        onConfirm: () => this.$emit('delete:product', product.id),
      })
    },
  },
}
</script>
