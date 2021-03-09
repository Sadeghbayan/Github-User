<template>
  <Header />
  <section class="main">
    <router-view v-slot="{ Component }">
      <Suspense timeout="0">
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback>
          <span class="loader"></span>
        </template>
      </Suspense>
    </router-view>
  </section>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { provideStore } from "@/store/store";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer
  },
  setup() {
    //make our store globally available
    provideStore();
  }
});
</script>

<style lang="scss">
@import "@/assets/styles/main";

section.main {
  display: flex;
  flex: 1 0 auto;
}
</style>
