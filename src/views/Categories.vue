<template>
  <div class="container">
    <div class="columns">
      <div class="column is-three-fifths">
        <Table
          :isLoading="isLoading"
          :categories="categories"
          @toggleEdit:category="toggleEdit"
          @delete:category="deleteCategory"
        />
      </div>
      <div class="column">
        <AddForm :isEdit="!isEdit" @add:category="addCategory" /> <br />
        <EditForm v-if="isEdit" :category="selectCategory" @edit:category="editCategory" />
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/categories/Table.vue'
import AddForm from '@/components/categories/AddForm.vue'
import EditForm from '@/components/categories/EditForm.vue'

export default {
  name: 'CategoriesPage',
  components: {
    Table,
    AddForm,
    EditForm,
  },
  data() {
    return {
      categories: [],
      selectCategory: null,
      isLoading: true,
      isEdit: false,
    }
  },

  methods: {
    async getCategories() {
      const { data } = await this.$http.get('/categories')
      this.categories = data
      this.isLoading = false
    },

    async addCategory(category) {
      try {
        await this.$http.post('/categories', category)
        await this.getCategories()

        this.$sendSuccess('เพิ่มข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    toggleEdit(category) {
      this.selectCategory = category
      this.isEdit = true
    },

    async editCategory(category) {
      try {
        await this.$http.put('/categories', category)
        await this.getCategories()

        this.isEdit = false
        this.$sendSuccess('แก้ไขข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },

    async deleteCategory(categoryId) {
      try {
        await this.$http.delete(`/categories/${categoryId}`)
        await this.getCategories()

        this.$sendSuccess('ลบข้อมูลสำเร็จ')
      } catch (error) {
        this.$sendDanger('มีข้อผิดพลาดบางอย่าง')
      }
    },
  },

  async mounted() {
    await this.getCategories()
  },
}
</script>
