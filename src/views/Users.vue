<template>
  <div>
    <div class="wrapper">
      <h2 class="mb-3">Список пользователей</h2>
      <div class="content">
        <div v-if="loading" class="alert alert-warning">
          Загрузка...
        </div>
        <div v-else-if="!users.length">
          Нет пользователей
        </div>
        <template v-else>
          <div class="content__header d-flex justify-content-between mb-3">
            <div class="block">
              <p><b>Пользователей в базе - {{ total }}</b></p>
            </div>
            <div class="block">
              <button class="btn btn-primary" @click="loadData">Обновить таблицу</button>
            </div>
          </div>
          <select-line />
          <user-list :users="users" />
          <pagination />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    UserList: () => import('@/components/UserList.vue'),
    Pagination: () => import('@/components/Pagination.vue'),
    SelectLine: () => import('@/components/SelectLine.vue')
  },
  data: () => ({
    users: [],
    loading: true
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
