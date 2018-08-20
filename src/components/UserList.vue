<template>
  <div>
    <select-line
        v-model.number="rowsPerPage"
        :rowsPerPage="rowsPerPage" 
      />
    <table class="table table-hover table-striped">
      <thead>
        <slot name="header">
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
        </slot>
      </thead>
      <tbody>
        <tr v-for="item in filteredRows" :key="item.id">
          <slot name="row" v-bind="item">
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
          </slot>
        </tr>
      </tbody>
    </table>
    <pagination
        v-model.number="selectedPage"
        :per-page="rowsPerPage"
        :total="totalRows"
      />
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserList',
  data: () => ({
    users: [],
    loading: true,
    list: [],
    rowsPerPage: 5,
    selectedPage: 1
  }),
  components: {
    SelectLine: () => import('@/components/SelectLine.vue'),
    Pagination: () => import('@/components/Pagination.vue')
  },
  computed: {
    restUrl() {
      return `http://localhost:3000/users`
    },

    totalRows() {
      return this.users.length
    },

    total() {
      return this.users.length
    },

    filteredRows() {
      return this.users.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.rowsPerPage
        const finalIndex = startIndex + this.rowsPerPage
        return startIndex <= index && index < finalIndex
      })
    }
  },
  mounted() {
    this.loadData()
  },
  watch: {
    // При изменении количества элементов на страницу
    rowsPerPage() {
      this.selectedPage = 1
    }
  },
  methods: {
    loadData() {
      this.loading = true

      axios
        .get(this.restUrl)
        .then(response => {
          this.users = response.data
          this.loading = false
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
