<template>
  <div>
    <h2>Список пользователей</h2>

    <div v-if="loading" class="alert alert-warning">
      Загрузка...
    </div>
    <div v-if="!users.length">
      Нет пользователей
    </div>
    <user-list v-else :users="users" />
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  components: {
    UserList
  },
  data: () => ({
    users: [],
    loading: true
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.loading = true

      axios
        .get('http://localhost:3000/users')
        .then(response => {
          this.users = response.data
          this.loading = false
        })
        .catch(error => console.log.error(error))
    }
  }
}
</script>
