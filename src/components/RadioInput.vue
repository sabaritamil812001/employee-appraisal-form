<template>
  <div>
    <input
      v-for="option in options"
      :key="option"
      type="radio"
      :id="option"
      :name="name"
      :value="option"
      :checked="modelValue === option"
      @change="updateValue(option)"
    />
    <label v-for="option in options" :key="'label-' + option" :for="option">{{
      option
    }}</label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>
