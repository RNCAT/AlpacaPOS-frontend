<template>
  <div class="card">
    <div class="card-content">
      <b-table :loading="isLoading" :data="categories" paginated per-page="10">
        <b-table-column field="id" label="ID" searchable sortable width="80" v-slot="props">
          {{ props.row.id }}
        </b-table-column>

        <b-table-column field="name" label="ชื่อประเภท" v-slot="props">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column label="จัดการ" width="120" centered v-slot="props">
          <div class="buttons">
            <b-button type="is-warning" icon-right="edit" @click="toggleEdit(props.row)" />
            <b-button type="is-danger" icon-right="trash-alt" @click="confirmDelete(props.row)" />
          </div>
        </b-table-column>

        <template #empty>
          <div class="has-text-centered">
            <i class="fas fa-times"></i>
            ไม่มีประเภทสินค้า
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
    categories: {
      type: Array,
      required: true,
    },
  },

  methods: {
    toggleEdit(category) {
      this.$emit('toggleEdit:category', category)
    },

    confirmDelete(category) {
      this.$buefy.dialog.confirm({
        title: 'ลบสินค้า ',
        message: `คุณต้องการลบประเภทสินค้า: <b>${category.name}</b> ?`,
        type: 'is-danger',
        onConfirm: () => this.$emit('delete:category', category.id),
      })
    },
  },
}
</script>
