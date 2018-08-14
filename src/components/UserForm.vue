<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.firstName" />
    </div>
    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName" />
    </div>
    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="localUser.balance" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" v-model="localUser.email" />
    </div>
    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="localUser.phone" />
    </div>
    <div class="form-group">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="localUser.address" />
    </div>
    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="localUser.company" />
    </div>
    <div class="form-group">
      <label>Зарегистрирован</label>
      <input type="text" class="form-control" v-model="localUser.registered" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user',
    event: 'userevent'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: {}
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    },
    addUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  mounted() {
    this.localUser = this.user
  },
  methods: {
    updateUser() {
      this.$emit('userevent', Object.assign({}, this.localUser))
    }
  }
}
</script>
