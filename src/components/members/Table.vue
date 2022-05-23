<template>
  <div class="card">
    <div class="card-content">
      <b-table :loading="isLoading" :data="members" paginated per-page="10">
        <b-table-column field="email" width="200" label="อีเมล" searchable v-slot="props">
          {{ props.row.email }}
        </b-table-column>

        <b-table-column field="firstname" label="ชื่อ" sortable v-slot="props">
          {{ props.row.firstname }}
        </b-table-column>

        <b-table-column field="lastname" label="นามสกุล" sortable v-slot="props">
          {{ props.row.lastname }}
        </b-table-column>

        <b-table-column field="phone" label="เบอร์โทรศัพท์" sortable v-slot="props">
          {{ props.row.phone }}
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
    members: {
      type: Array,
      required: true,
    },
  },

  methods: {
    toggleEdit(member) {
      this.$emit('toggleEdit:member', member)
    },

    confirmDelete(member) {
      this.$buefy.dialog.confirm({
        title: 'ลบสินค้า ',
        message: `คุณต้องการลบสมาชิก: <b>${member.firstname} ${member.lastname}</b> ?`,
        type: 'is-danger',
        onConfirm: () => this.$emit('delete:member', member.id),
      })
    },
  },
}
</script>
