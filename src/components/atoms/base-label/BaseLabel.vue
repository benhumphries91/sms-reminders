<template>
  <label :for="$props.for" class="label">
    <slot />
  </label>
</template>

<script>
export default {
  name: "BaseLabel",
  props: {
    for: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.label {
  color: $text;
  font-size: $font-size-base;
}
</style>
