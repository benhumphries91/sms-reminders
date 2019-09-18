<template>
  <div class="labelled-input">
    <transition name="fade-up">
      <BaseLabel
        v-show="input.length"
        :for="$props.name"
        class="labelled-input__label"
      >
        {{ $props.label }}
      </BaseLabel>
    </transition>
    <BaseInput
      :type="$props.type"
      :name="$props.name"
      :placeholder="$props.label"
      v-model="input"
      class="labelled-input__input"
    />
  </div>
</template>

<script>
import BaseLabel from "@/components/atoms/base-label/BaseLabel.vue";
import BaseInput from "@/components/atoms/base-input/BaseInput.vue";

export default {
  name: "LabelledInput",
  components: {
    BaseLabel,
    BaseInput
  },
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style lang="scss">
.labelled-input {
  position: relative;
  display: block;
}

.labelled-input + .labelled-input {
  margin-top: map-get($map: $spacing, $key: 20);
}

.labelled-input__label {
  position: absolute;
  top: 0;
  left: 20px;
  transform: translateY(-50%);
  z-index: 1;
}

.labelled-input__label:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  height: 5px;
  width: 100%;
  box-sizing: content-box;
  padding-left: 5px;
  padding-right: 5px;
  background-color: transparentize($color: $secondary, $amount: 0.1);
}

.labelled-input__input {
  outline-offset: 5px;
}
</style>
