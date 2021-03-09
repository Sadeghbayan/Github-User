<template>
  <div class="home container">
    <div v-if="error">{{ error.statusText }}</div>
    <section class="wide user" v-if="!error">
      <h2>Thanks {{ fullName }}!</h2>
      <div class="user__inner">
        <div class="user__image--container">
          <img
            :src="userInfo.avatar_url"
            :alt="`${fullName} Github avatar`"
            class="user__image"
          />
        </div>
        <div class="user__info">
          <h2>
            {{ userInfo.name }}
          </h2>
          <p>
            {{ userInfo.location }}
          </p>
          <p>
            {{ userInfo.bio }}
          </p>
        </div>
      </div>
    </section>
    <Repositories :repos="reposItemCheck" />
    <PageControl :previous-step="previousStep" :next-step="nextStep" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store/store";
import useUser from "@/hooks/useUser";
import useRepos from "@/hooks/useRepos";
import Repositories from "@/components/Repositories.vue";
import { getTopStarsRepos } from "@/utils/helper";
import PageControl from "@/components/PageControl.vue";

export default defineComponent({
  name: "Github-user",
  components: {
    Repositories,
    PageControl
  },
  async setup() {
    const store: Store = useStore();
    const router = useRouter();
    const { state, getters } = store;
    const fullName = getters.fullName();
    const { userInfo, error } = await useUser(state.githubUsername);
    const { userRepos } = await useRepos(state.githubUsername);
    const nextStep = reactive({
      action: () => {
        router.push("/request-form");
      },
      isDisabled: false,
      label: "Go Back to Search Page"
    });
    const previousStep = reactive({
      action: () => {
        router.push("/");
      },
      isDisabled: false,
      label: "Home"
    });

    // handle the error  or response on repository items
    const reposItemCheck = computed(() => {
      let reposItem: Repo[] | undefined = [];
      const { value } = userRepos;
      if (!error.value) {
        reposItem = getTopStarsRepos(value, 3);
      }
      return reposItem;
    });

    return {
      userInfo,
      error,
      fullName,
      status,
      reposItemCheck,
      nextStep,
      previousStep
    };
  }
});
</script>
<style lang="scss">
.user {
  &__inner {
    display: flex;
    margin-top: 40px;
    border-bottom: 2px solid $gray;
    margin-bottom: 5px;
    padding-bottom: 30px;
  }
  &__image {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    &--container {
      margin-right: 10px;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 5px;
  }
  p {
    margin: 5px 0;
    font-size: $font-size-small;
  }
}
</style>
