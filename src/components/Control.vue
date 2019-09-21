<template>
  <button
    :class="$controls.button"
    @click="$emit('click')"
  >
    <svg>
      <use :xlink:href="`#${icon}`" />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" src="@/stylesheets/controls.scss" module="$controls" />
