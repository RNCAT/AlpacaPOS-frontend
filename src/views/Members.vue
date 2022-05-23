<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths">
        <Table
          :isLoading="isLoading"
          :members="members"
          @toggleEdit:member="toggleEdit"
          @delete:member="deleteMember"
        />
      </div>
      <div class="column">
        <AddForm :isEdit="!isEdit" @add:member="addMember" /> <br />
        <EditForm v-if="isEdit" :member="selectMember" @edit:member="editMember" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/members/Table.vue'
import AddForm from '@/components/members/AddForm.vue'
import EditForm from '@/components/members/EditForm.vue'

export default {
  name: 'MembersPage',
  components: {
    Table,
    AddForm,
    EditForm,
  },
  data() {
    return {
      members: [],
      selectMember: null,
      isLoading: true,
      isEdit: false,
    }
  },

  methods: {
    async getMembers() {
      const { data } = await this.$http.get('/members')
      this.members = data
      this.isLoading = false
    },

    async addMember(newMember) {
      try {
        await this.$http.post('/members', newMember)
        await this.getMembers()

        this.$sendSuccess('เพิ่มข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    toggleEdit(member) {
      this.selectMember = member
      this.isEdit = true
    },

    async editMember(member) {
      try {
        await this.$http.put('/members', member)
        await this.getMembers()

        this.isEdit = false
        this.$sendSuccess('แก้ไขข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    async deleteMember(memberId) {
      try {
        await this.$http.delete(`/members/${memberId}`)
        await this.getMembers()

        this.$sendSuccess('ลบข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },
  },

  async mounted() {
    await this.getMembers()
  },
}
</script>
