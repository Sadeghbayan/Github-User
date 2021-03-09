// created a simple store without Vuex

import { reactive, readonly, inject, DeepReadonly, provide } from "vue";
import { emailChecker } from "@/utils/helper";

//State
const state = reactive<State>({
  fullName: "",
  githubUsername: "",
  email: "",
  hasAcceptedTerms: false,
  preDefinedUser: "homeday-de",
});

//Methods
const methods = {
  toggleHasAcceptedTerms(val: boolean) {
    state.hasAcceptedTerms = val;
  },
  updateFullName(firstName: string) {
    state.fullName = firstName;
  },
  updateGithubUsername(githubUsername: string) {
    state.githubUsername = githubUsername;
  },
  updateEmail(email: string) {
    state.email = email;
  },
};

// Getters
const getters = {
  fullName(): string {
    return state.fullName;
  },
  isValidPersonalInfo(): boolean {
    return (
      state.fullName.length > 0 &&
      state.githubUsername.length > 0 &&
      getters.isValidEmail() &&
      getters.isValidTermsAndServices()
    );
  },
  isValidEmail(): boolean {
    return emailChecker(state.email);
  },
  isValidTermsAndServices(): boolean {
    return state.hasAcceptedTerms;
  },
};

export const StateSymbol = Symbol("Character Store");

// make it also available in router
export const store: DeepReadonly<Store> = readonly({
  state,
  methods,
  getters,
});

export function provideStore() {
  provide(StateSymbol, store);
}

export function useStore() {
  const store = inject(StateSymbol);
  if (!store) {
    // throw error, no store provided
  }
  return store as Store;
}
