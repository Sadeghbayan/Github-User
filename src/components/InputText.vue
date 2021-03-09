<template>
  <div class="input-text__container">
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :name="name"
      :type="type"
      class="input-text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false,
      default: ""
    }
  }
});
</script>

<style lang="scss">
.input-text__container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  width: 100%;
}

label {
  font-weight: $font-weight-light;
  font-size: $font-size-small;
  margin-bottom: 5px;
}

.input-text {
  width: 100%;
  box-sizing: border-box;
  height: 35px;
  padding: 0 0.5rem;
  border: 1px solid $gray;
  caret-color: $dark-blue;
  color: $dark-blue;
  transition: border-color 0.3s ease-in-out;
  font-size: $font-size-small;
  @include mq(md) {
    width: 300px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px $dark-gray;
  }
}
</style>
