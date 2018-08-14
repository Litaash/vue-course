<template>
  <div>
    Редактирование пользователя с ID {{ id }}
    <div v-if="!user">
      Загрузка...
    </div>
    <template v-else>
      <user-form v-model="user" />

      <button type="button" class="btn btn-primary" @click="save">
        Сохранить
      </button>
      
      <button type="button" class="btn btn-danger ml-3" @click="remove">
        Удалить
      </button>
    </template>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'Edit',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10)
    },

    restUrl() {
      return `/users/${this.id}`
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    updateUser() {
      console.log('updateUser')
    },

    redirectToList() {
      this.$router.push('/users')
    },

    loadUser() {
      axios
        .get(this.restUrl)
        .then(response => {
          this.user = response.data
        })
        .catch(error => console.log(error))
    },
    save() {
      axios
        .patch(this.restUrl, this.user)
        .then(() => this.redirectToList())
        .catch(error => console.log(error))
    },
    remove() {
      axios
        .delete(this.restUrl, this.user)
        .then(() => this.redirectToList())
        .catch(error => console.log(error))
    }
  }
}
</script>
