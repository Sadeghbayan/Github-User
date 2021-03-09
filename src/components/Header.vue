<template>
  <header class="header">
    <div class="header__inner container">
      <router-link to="/">
        <img alt="Homeday logo" src="../assets/logo.svg" class="header__logo" />
      </router-link>
      <h1>Github Repo</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li><router-link to="/request-form">Search</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

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
    width: 40px;
    height: 40px;
    margin-right: 5px;
    @include mq(md) {
      width: 50px;
      height: 58px;
      margin-right: 10px;
    }
  }

  h1 {
    margin: 0;
    align-self: center;
    font-size: $font-size-small;
    font-weight: $font-weight-bold;
    @include mq(md) {
      font-size: $font-size-default;
    }
  }
  nav {
    margin-left: auto;
    ul {
      display: flex;
      list-style: none;
      font-size: $font-size-small;
      font-weight: $font-weight-bold;
      @include mq(md) {
        font-size: $font-size-default;
      }
      li {
        &:last-child {
          margin-left: 20px;
        }
        a {
          color: $dark-gray;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
