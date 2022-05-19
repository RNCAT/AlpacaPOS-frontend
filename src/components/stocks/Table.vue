<template>
  <div class="card">
    <div class="card-content">
      <b-table
        :loading="isLoading"
        :data="stocks"
        paginated
        per-page="10"
        default-sort="createdAt"
        default-sort-direction="desc"
      >
        <b-table-column
          field="productId"
          label="รหัสสินค้า"
          sortable
          searchable
          centered
          width="100"
          v-slot="props"
        >
          {{ props.row.productId }}
        </b-table-column>

        <b-table-column field="product.name" label="ชื่อสินค้า" sortable searchable v-slot="props">
          {{ props.row.product.name }}
        </b-table-column>

        <b-table-column
          field="product.category.name"
          label="ประเภท"
          sortable
          searchable
          width="120"
          v-slot="props"
        >
          {{ props.row.product.category.name }}
        </b-table-column>

        <b-table-column field="quantity" label="จำนวน" sortable centered v-slot="props">
          {{ props.row.quantity }}
        </b-table-column>

        <b-table-column field="createdAt" label="วันที่" sortable centered v-slot="props">
          {{ new Date(props.row.createdAt).toLocaleDateString() }}
        </b-table-column>
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
    stocks: {
      type: Array,
      required: true,
    },
  },
}
</script>
