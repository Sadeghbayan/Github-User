<template>
  <div class="container">
    <div class="repository_full">
      <!-- This should be a seperate component -->
      <article>
        <div class="repository_full__info--top">
          <h2>{{ userRepo.full_name }}</h2>
          <p>{{ userRepo.description }}</p>
        </div>
      </article>
      <sidebar>
        <p><label> Issue: </label>{{ userRepo.open_issues_count }}</p>
        <p><label> Language: </label>{{ userRepo.language }}</p>
        <p><label> Followers: </label>{{ userRepo.followers }}</p>
        <p><label> License: </label>{{ userRepo.license?.name }}</p>
        <a :href="userRepo.html_url">Go to Repo</a>
      </sidebar>
    </div>
    <PageControl :previous-step="previousStep" :next-step="nextStep" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import useRepo from "@/hooks/useRepo";
import { useRoute, useRouter } from "vue-router";
import PageControl from "@/components/PageControl.vue";

export default defineComponent({
  name: "Repository",
  components: {
    PageControl
  },
  async setup() {
    const route = useRoute();
    const router = useRouter();
    const { userRepo } = await useRepo(
      route.params.user_name as string,
      route.params.repo_name as string
    );

    const nextStep = reactive({
      action: () => {
        router.go(-1);
      },
      isDisabled: false,
      label: "Go back to User Repositories"
    });
    const previousStep = reactive({
      action: () => {
        // I decided not to go one level back but redirect to homepage
        router.push("/");
      },
      isDisabled: false,
      label: "Home"
    });
    return {
      userRepo,
      nextStep,
      previousStep
    };
  }
});
</script>

<style lang="scss">
.repository_full {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  p,
  a {
    font-size: $font-size-small;
    font-weight: $font-weight-light;
  }
  a {
    cursor: pointer;
    text-decoration: underline;
  }
  label {
    font-weight: $font-weight-bold;
  }
  &__image {
    max-width: 100%;
    height: 105px;
  }
  &__info--top {
    @include mq(md) {
      margin-left: 10px;
    }
    h2 {
      margin-bottom: 10px;
      margin-top: 4px;
    }
    p {
      margin: 0;
    }
  }
  article {
    flex-basis: 100%;
    display: flex;

    @include mq(md) {
      flex-basis: 70%;
    }
  }
  sidebar {
    flex-basis: 100%;
    @include mq(md) {
      flex-basis: 30%;
    }
  }
}
</style>
