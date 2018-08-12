<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">Vue Course</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" tag="li" to="/" exact>
            <a href="" class="nav-link">
              Главная
            </a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/users">
            <a href="" class="nav-link">
              Список пользователей
            </a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/add">
            <a href="" class="nav-link">
              Добавление пользователя
            </a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;

  main {
    padding: 90px 0;
  }
}
</style>
