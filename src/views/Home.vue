<template>
  <div class="home container">
    <div class="wide">
      <h2>Top 3 repository from {{ store.state.preDefinedUser }}</h2>
      <Repositories :repos="repos" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/store";
import Repositories from "@/components/Repositories.vue";
import useRepos from "@/hooks/useRepos";
import { getTopStarsRepos } from "@/utils/helper";

export default defineComponent({
  name: "Home",
  components: {
    Repositories
  },
  async setup() {
    const store: Store = useStore();
    const { state } = store;
    const { userRepos } = await useRepos(state.preDefinedUser);
    const { value } = userRepos;
    const repos: Repo[] | undefined = getTopStarsRepos(value, 3);
    return {
      store,
      repos
    };
  }
});
</script>

<style lang="scss">
.wide {
  h2 {
    font-size: $font-size-small;
    @include mq(md) {
      font-size: $font-size-default;
    }
  }
}
</style>
