<template>
  <div>
    <input
      v-for="option in options"
      :key="option"
      type="checkbox"
      :id="option"
      :name="option"
      :value="option"
      :checked="modelValue.includes(option)"
      @change="updateValue($event.target.checked, option)"
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
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateValue(checked, option) {
      const newValue = [...this.modelValue];
      if (checked) {
        newValue.push(option);
      } else {
        const index = newValue.indexOf(option);
        if (index > -1) newValue.splice(index, 1);
      }
      this.$emit("update:modelValue", newValue);
    },
  },
};
</script>
