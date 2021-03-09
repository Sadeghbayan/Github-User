<template>
  <main class="container">
    <h2>
      <!-- should be in heading component  -->
      Personal info
    </h2>
    <input-text
      id="fullname"
      v-model="fullname"
      label="Your Name"
      name="fullname"
      type="text"
    />
    <input-text
      id="email"
      v-model="email"
      label="Email"
      name="email"
      type="email"
    />
    <input-text
      id="githubUsername"
      v-model="githubUsername"
      label="Github username"
      name="githubUsername"
      type="text"
    />
    <input-checkbox
      id="acceptsTermsAndServices"
      v-model="hasAcceptedTerms"
      label="I accept the terms and conditions"
      name="acceptsTermsAndServices"
    />
    <PageControl :previous-step="previousStep" :next-step="nextStep" />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, onMounted } from "vue";
import { useStore } from "@/store/store";
import { useRouter } from "vue-router";
import InputText from "@/components/InputText.vue";
import InputCheckbox from "@/components/InputCheckbox.vue";
import PageControl from "@/components/PageControl.vue";

export default defineComponent({
  name: "RequestForm",
  components: {
    InputText,
    InputCheckbox,
    PageControl
  },
  setup() {
    const store: Store = useStore();
    const { state, methods, getters } = store;
    const router = useRouter();
    const nextStep = reactive({
      action: () => {
        router.push("/github-user");
      },
      isDisabled: true,
      label: "User Information"
    });
    const previousStep = reactive({
      action: () => {
        // I decided not to go one level back but redirect to homepage
        router.push("/");
      },
      isDisabled: false,
      label: "Home"
    });
    const fullname = computed({
      get() {
        return state.fullName;
      },
      set(val) {
        methods.updateFullName(val);
        nextStep.isDisabled = !getters.isValidPersonalInfo();
      }
    });
    const githubUsername = computed({
      get() {
        return state.githubUsername;
      },
      set(val) {
        methods.updateGithubUsername(val);
        nextStep.isDisabled = !getters.isValidPersonalInfo();
      }
    });
    const email = computed({
      get() {
        return state.email;
      },
      set(val) {
        methods.updateEmail(val);
        nextStep.isDisabled = !getters.isValidPersonalInfo();
      }
    });
    const hasAcceptedTerms = computed({
      get() {
        return state.hasAcceptedTerms;
      },
      set(val: boolean) {
        methods.toggleHasAcceptedTerms(val);
        nextStep.isDisabled = !getters.isValidPersonalInfo();
      }
    });

    onMounted(() => {
      // Unchecking terms field everytime user see the search form
      // just to avoid user from skipping the form fields
      methods.toggleHasAcceptedTerms(false);
    });

    return {
      store,
      nextStep,
      previousStep,
      fullname,
      email,
      githubUsername,
      hasAcceptedTerms
    };
  }
});
</script>
