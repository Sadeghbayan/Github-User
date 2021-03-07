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
}

.page-control__previous-step {
  position: relative;
  margin-right: auto;
  padding-left: 1.5rem;

  &::after {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    width: 0.75rem;
    height: 0.75rem;
    content: " ";
    transform: scaleX(-1) translateY(calc(-50% + 1px));
  }
}

.steps-control__next-step {
  position: relative;
  margin-left: auto;
  padding-right: 1.5rem;

  &::after {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    width: 0.75rem;
    height: 0.75rem;
    content: " ";
    transform: translateY(calc(-50% + 1px));
  }
}
</style>
