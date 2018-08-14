<template>
  <div class="input-group mb-3 d-flex flex-column">
    <select class="custom-select w-25">
      <option selected>Choose...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <div class="mt-3">Выбрано элементов на страницу: <b>5</b></div>
  </div>
</template>

<script>
export default {
  name: 'SelectLine'
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
