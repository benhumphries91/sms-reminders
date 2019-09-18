<template>
  <component
    :is="getComponentType()"
    :type="$props.type"
    :maxlength="getMaxCharacterLength()"
    :name="$props.name"
    :placeholder="$props.placeholder"
    :value="value"
    @input="onInputChange"
    class="input"
    :class="{ textarea: $props.type === 'textarea' }"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      required: false,
      default: ""
    }
  },
  methods: {
    getComponentType() {
      return this.$props.type === "textarea" ? "textarea" : "input";
    },
    getMaxCharacterLength() {
      const inputType = this.$props.type;
      switch (inputType) {
        case "text":
          return 200;
        case "email":
          return 320;
        case "textarea":
          return 10000;
        default:
          return 500;
      }
    },
    onInputChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="scss">
.input {
  border: 1px solid $black;
  border-radius: $border-radius-sm;
  resize: none;
  font-size: $font-size-base;
  padding: 10px 20px;
  background-color: transparent;
  color: $white;
  width: 80%;
  display: block;
}

.input:focus {
  border-color: $accent;
}

.textarea {
  min-height: 168px;
  max-height: 100vh;
  resize: vertical;
}
</style>
