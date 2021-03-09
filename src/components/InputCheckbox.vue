<template>
  <div class="input-checkbox__container">
    <input
      :id="id"
      :name="name"
      type="checkbox"
      class="input-checkbox"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="id" class="input-checkbox__label">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
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
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss">
.input-checkbox__container {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}

.input-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  opacity: 0;

  &:focus {
    + .input-checkbox__label {
      &::before {
        box-shadow: 0 0 0 3px $dark-blue;
      }
    }
  }

  &:checked {
    + .input-checkbox__label {
      &::after {
        content: "";
      }
    }
  }
}

.input-checkbox__label {
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    left: -1.75rem;
    height: 1.25rem;
    width: 1.25rem;
    content: "";
    border: 2px solid $dark-blue;
    border-radius: 3px;
  }

  &::after {
    position: absolute;
    left: calc(-1.5rem + 1px);
    height: 0.4rem;
    width: 0.75rem;
    content: none;
    border-left: 2px solid;
    border-bottom: 2px solid;
    border-color: $dark-blue;
    transform: rotate(-53deg) translateY(-1px);
  }
}
</style>
