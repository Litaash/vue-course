<template>
  <div>
    <div v-if="loading" class="alert alert-warning">
      Загрузка...
    </div>
    <div v-else-if="!users.length">
      Нет пользователей
    </div>
    <div v-else>
      <div class="content__header d-flex justify-content-between mb-3">
        <div class="block">
          <p><b>Пользователей в базе –– {{ total }}</b></p>
        </div>
        <div class="block">
          <button class="btn btn-primary" @click="loadData">Обновить таблицу</button>
        </div>
      </div>
      <select-line
        v-model.number="rowsPerPage"
        :rowsPerPage="rowsPerPage" 
      />
      <slot name="component">
        <user-list
          :selectedPage="selectedPage"
          :rowsPerPage="rowsPerPage"
          :users="users"
        />
      </slot>
      <pagination
        v-model.number="selectedPage"
        :per-page="rowsPerPage"
        :total="totalRows"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SmartTable',
  components: {
    UserList: () => import('@/components/UserList.vue'),
    Pagination: () => import('@/components/Pagination.vue'),
    SelectLine: () => import('@/components/SelectLine.vue')
  },
  data: () => ({
    users: [],
    loading: true,
    list: [],
    rowsPerPage: 5,
    selectedPage: 1
  }),
  computed: {
    restUrl() {
      return `http://localhost:3000/users`
    },

    totalRows() {
      return this.users.length
    },

    total() {
      return this.users.length
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
