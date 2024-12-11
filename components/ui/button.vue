<template>
  <button :class="classes" :disabled="disabled">
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface ButtonProps {
  variant?: "primary" | "secondary" | "text" | "outlined";
  size?: "small" | "medium" | "large";
  icon?: boolean;
  disabled?: boolean;
  label?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "medium",
  icon: false,
  disabled: false,
  label: "",
});

const sizeClasses = {
  small: "text-sm gap-1 px-4 py-2 rounded-lg leading-[1.17] tracking-[-0.1px]	",
  medium: "text-md gap-2 px-4 py-2 rounded-xl	 leading-[1.17] tracking-[-0.1px]",
  large: "text-lg gap-2 px-5 py-3 rounded-xl	 leading-[1.17] tracking-[-0.1px]",
};

const variantClasses = {
  primary: "bg-white/5 text-white shadow hover:bg-white/50 active:bg-white/50 transition duration-100 ease-in-out",
  secondary: "bg-white text-black shadow hover:bg-white/80 active:bg-white/80 transition duration-100 ease-in-out",
  outlined: "bg-none text-white border border-[#ffffff2e] shadow hover:bg-white/10 active:bg-white/10 transition duration-100 ease-in-out",
  text: "bg-transparent text-gray-400 hover:text-white active:text-white transition duration-100 ease-in-out",
};

const classes = computed(() => {
  return `${sizeClasses[props.size]} ${variantClasses[props.variant]} ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`;
});
</script>

<style scoped>
.button__text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "InterDisplay" !important;
}
</style>
