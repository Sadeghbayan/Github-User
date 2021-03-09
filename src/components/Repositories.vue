<template>
  <div v-for="repo in repos" :key="repo.id" class="top-three-repos">
    <article class="repository">
      <router-link :to="`/${repo.owner.login}/${repo.name}`">
        <h2 class="repository__title">{{ repo.name }}</h2>
      </router-link>
      <p class="repository__description">{{ repo.description }}</p>
      <div class="repository__list">
        <span class="repository__list--item">
          <fa icon="code-branch" class="classname"></fa>
          <span>
            {{ repo.forks_count }}
          </span>
        </span>
        <span class="repository__list--item">
          <fa icon="star" class="classname"></fa>
          <span>
            {{ repo.stargazers_count }}
          </span>
        </span>
        <span class="repository__list--item">
          <fa icon="info-circle" class="classname"></fa>
          <span>
            {{ repo.open_issues_count }}
          </span>
        </span>
        <span class="repository__list--item">
          <fa icon="eye" class="classname"></fa>
          <span>
            {{ repo.watchers }}
          </span>
        </span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopThreeRepos",
  props: {
    repos: Array
  }
});
</script>

<style lang="scss">
.top-three-repos {
  width: 100%;
  &:nth-last-of-type(1) {
    margin-bottom: 10px;
  }
}
.repository {
  font-size: $font-size-xsmall;
  border-bottom: 1px solid $gray;
  padding: 15px 0;
  @include mq(md) {
    font-size: $font-size-small;
  }

  &__title {
    color: $dark-blue;
    font-size: $font-size-small;
    font-weight: $font-weight-bold;
    @include mq(md) {
      font-size: $font-size-default;
    }
  }
  &__list--item {
    margin-right: 7px;
    display: inline-flex;
    align-items: center;
    svg {
      width: 20px;
      height: 15px;
      vertical-align: middle;
      color: $dark-gray;
    }
    span {
      margin-left: 5px;
    }
  }
}
</style>
