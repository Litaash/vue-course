<template>
  <div class="input-group mb-3 d-flex flex-column">
    <select class="custom-select w-25" :value="value" @input="changed">
      <option v-for="item in list" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
    <div class="form-control-static mt-3">Выбрано элементов на страницу <b>{{ rowsPerPage }}</b></div>
  </div>
</template>

<script>
export default {
  name: 'SelectLine',
  props: {
    value: {
      type: Number,
      required: true
    },
    rowsPerPage: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    list: [2, 5, 10]
  }),
  methods: {
    changed(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.content {
  .input-group {
    padding: 0 15px;
    .custom-select {
      border-radius: 5px;
    }
  }
}
</style>
