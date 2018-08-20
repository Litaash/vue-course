<template>
  <div>
    <div class="wrapper">
      <h2 class="mb-3">Список Телефонов</h2>
      <div class="content">
        <user-list url="/users">
          <tr slot="header">
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
          </tr>
          <template slot="row" slot-scope="props">
            <td>{{ props.firstName }}</td>
            <td>{{ props.lastName }}</td>
            <td>{{ props.phone }}</td>
          </template>
        </user-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phone',
  components: {
    UserList: () => import('@/components/UserList.vue')
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
