<template>
  <nav class="page-control__container">
    <button
      v-if="previousStep"
      :disabled="previousStep.isDisabled"
      class="main-cta page-control__previous-step"
      @click="previousStep.action"
    >
      {{ previousStep.label }}
    </button>
    <button
      v-if="nextStep"
      :disabled="nextStep.isDisabled"
      class="main-cta page-control__next-step"
      @click="nextStep.action"
    >
      {{ nextStep.label }}
    </button>
  </nav>
</template>

<script>
import pageValidator from "@/utils/pageValidator";

export default {
  name: "pageControl",
  props: {
    nextStep: {
      type: Object,
      required: false,
      default: null,
      validator: pageValidator
    },
    previousStep: {
      type: Object,
      required: false,
      default: null,
      validator: pageValidator
    }
  }
};
</script>

<style lang="scss">
.page-control__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;

  .main-cta {
    cursor: pointer;
    background: $homeday-blue;
    padding: 15px;
    border-radius: 3px;
    color: $white;
    border: medium none;
    font-size: $font-size-small;
    &:disabled {
      background-color: $gray;
    }
  }
}
</style>
