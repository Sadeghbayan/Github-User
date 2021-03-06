<template>
  <header class="header">
    <div class="header__inner container">
      <router-link to="/">
        <img alt="Homeday logo" src="./assets/logo.svg" class="header__logo" />
      </router-link>
      <h1>Github Repo</h1>
    </div>
  </header>
  <router-view />
  <footer class="footer">
    <div class="footer__inner container">
      <p>© 2021 Homeday assignment</p>
    </div>
  </footer>
</template>

<style lang="scss">
.header {
  background: $white;
  padding: 16px 0;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: $dark-gray;
  &__inner {
    display: flex;
    flex-direction: row;
  }

  &__logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  h1 {
    margin: 0;
    align-self: center;
    font-size: $font-size-default;
    font-weight: $font-weight-bold;
  }
}
//TODO: make a mixin for that so header and footer can reuse it
.footer {
  background: $white;
  padding: 16px 0;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: $dark-gray;
  font-size: $font-size-small;
}
</style>
