<template>
  <div class="pagination-wrapper">
    <nav aria-label="Page navigation example">
      <div class="mb-3">
        <b>Текущая страница: {{ value }}</b>
      </div>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: value === 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="item in maxPages" :key="item" :class="{ active: value === item }">
          <a class="page-link" href="#" @click.prevent="selectPage(item)">
            {{ item }}
          </a>
        </li>
        <li class="page-item" :class="{ disabled: value === maxPages }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // Выбранная страница
    value: {
      type: Number,
      required: true
    },
    // Количество строк на страницу
    perPage: {
      type: Number,
      required: true
    },
    // Общее количество строк в таблице
    total: {
      type: Number,
      required: true
    }
  },
  computed: {
    // Максимальное количество страниц
    maxPages() {
      return Math.ceil(this.total / this.perPage)
    }
  },
  methods: {
    // Предыдущая страница
    prevPage() {
      const pageNum = this.value - 1
      if (pageNum > 0) {
        this.selectPage(pageNum)
      }
    },
    // Следующая страница
    nextPage() {
      const pageNum = this.value + 1
      if (pageNum <= this.maxPages) {
        this.selectPage(pageNum)
      }
    },
    // Выбор новой страницы
    selectPage(page) {
      this.$emit('input', page)
    }
  }
}
</script>

<style lang="scss">
.pagination-wrapper {
  padding: 0 15px;
}
</style>
