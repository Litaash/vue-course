<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Имя</label>
          <input type="text" class="form-control" v-model="localUser.firstName" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Фамилия</label>
          <input type="text" class="form-control" v-model="localUser.lastName" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Баланс</label>
          <input type="text" placeholder="$1,000.99" class="form-control" v-model="localUser.balance" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="localUser.email" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Телефон</label>
          <input type="text" v-mask="'+## (###) ### ## ##'" placeholder="+38 (099) 000 00 00" class="form-control" v-model="localUser.phone" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Адрес</label>
          <input type="text" class="form-control" v-model="localUser.address" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Компания</label>
          <input type="text" class="form-control" v-model="localUser.company" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>Зарегистрирован</label>
          <!-- <input type="text" v-mask="'##.##.####'" placeholder="27.10.2016" class="form-control" v-model="localUser.registered" /> -->
          <datepicker
            v-model="localUser.registered"
          />
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>Активный</label>
          <div>
            <input type="checkbox" class="form-check-input basic-checkbox" v-model="localUser.isActive" />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="form-group">
          <label>Возраст</label>
          <input type="number" class="form-control" v-model="localUser.age" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label>URL Картинки</label>
          <div class="mb-3">
            <img
              :src="localUser.picture"
              class="img-thumbnail"
              height="150"
              width="150"
            />
          </div>
          <input
            type="text"
            class="form-control"
            v-model="localUser.picture"
          />
          <input type="file" style="display: none;" ref="avatar" @change="uploadNewAvatar" />
          <button type="button" class="btn btn-primary mt-3" @click="loadNewImage">Загрузить аватар</button>
        </div>
      </div>
      <div class="col-md-12">
        <div class="form-group">
          <label>Биография</label>
          <rich-editor v-model="localUser.about" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/axios.js'

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
  components: {
    Datepicker: () => import('@/components/Datepicker.vue'),
    RichEditor: () => import('@/components/RichEditor.vue')
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
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    updateUser() {
      this.$emit('userevent', Object.assign({}, this.localUser))
    },
    loadNewImage() {
      this.$refs.avatar.click()
    },
    uploadNewAvatar() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.avatar.files[0])
      // Добавляем ключ от IMGUR
      // https://api.imgur.com/oauth2/addclient
      const config = {
        headers: {
          Authorization: 'Client-ID 776588c29c9a786'
        }
      }
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.localUser.picture = response.data.link
          this.$refs.avatar.value = ''
        })
    }
  }
}
</script>

<style>
.basic-checkbox {
  margin-left: 0;
}
</style>
