<template>
  <div>
    <h2>Форма пользователя</h2>

    <div v-if="loading" class="alert alert-warning">
      Загрузка...
    </div>
    <div v-if="!user">
      Нет пользователя
    </div>
    <user-form v-else :user="user" />
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  components: {
    UserForm
  },
  data: () => ({
    user: null,
    loading: true
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.loading = true
      axios.get('http://localhost:3000/users').then(response => {
        this.user = response.data[1]
        this.loading = false
      })
    }
  }
}
</script>
