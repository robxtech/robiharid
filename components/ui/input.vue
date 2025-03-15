<template>
  <label>
    <span :class="labelClass" v-if="label">{{ label }}</span>
    <input :required="required" v-model="model" :type="type" :placeholder="placeholder" :class="classes" :disabled="disabled" :name="name" />
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";
const model = defineModel<string>();

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  icon?: string;
  required?: boolean;
  name?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  placeholder: "",
  label: "",
  disabled: false,
  size: "medium",
  required: false,
  name: "",
});

const sizeClasses = {
  small: "py-1 px-2 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-5 text-lg",
};

const classes = computed(() => {
  return `w-full bg-[#0b0c0e]   text-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-white border border-[#FFFFFF24] ${
    sizeClasses[props.size]
  } ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`;
});

const labelClass = "block mb-2 text-sm font-medium text-gray-300";
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
}
</style>
