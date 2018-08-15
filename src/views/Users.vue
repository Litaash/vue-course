<template>
  <div>
    <div class="wrapper">
      <h2 class="mb-3">Список пользователей</h2>
      <div class="content">
        <smart-table />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SmartTable: () => import('@/components/SmartTable.vue')
  }
}
</script>

<style lang="scss">
.wrapper {
  .content {
    border: 1px solid #dee2e6;
    border-radius: 5px;

    &__header {
      background: #f2f2f2;
      padding: 15px;
      border-bottom: 1px solid #dee2e6;

      .block {
        display: flex;
        align-items: center;

        p {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
