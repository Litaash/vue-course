<template>
  <div>
    <h2 class="mb-3">Добавить пользователя</h2>

    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <template v-else>
      <user-form  v-model="user" />

      <button type="button" class="btn btn-secondary" @click="add">
        Добавить
      </button>
    </template>
    
  </div>
</template>

<script>
import axios from 'axios'

const addUser = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
  accessLevel: 'user',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'Add',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: null
  }),
  computed: {
    restUrl() {
      return `http://localhost:3000/users`
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.loading = true
      this.user = Object.assign({}, addUser)

      axios.get(this.restUrl).catch(error => console.log(error))
    },

    redirectToList() {
      this.$router.push('/users')
    },

    add() {
      axios
        .post(this.restUrl, this.user)
        .then(() => this.redirectToList())
        .catch(error => console.log(error))
    }
  }
}
</script>
