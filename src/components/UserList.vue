<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredRows" :key="item.id">
        <td>
          <router-link :to="'/edit/' + item.id">
            # {{ item.id }}
          </router-link>
        </td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.isActive }}</td>
        <td>{{ item.balance }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.registered }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    },
    rowsPerPage: {
      type: Number,
      required: true
    },
    selectedPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    filteredRows() {
      return this.users.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.rowsPerPage
        const finalIndex = startIndex + this.rowsPerPage
        return startIndex <= index && index < finalIndex
      })
    }
  },
  watch: {
    // При изменении количества элементов на страницу
    rowsPerPage() {
      this.selectedPage = 1
    }
  }
}
</script>
