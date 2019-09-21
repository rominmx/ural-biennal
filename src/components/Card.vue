<template>
  <button
    :class="[$card.container, $style.container, { [$style.active]: active }]"
    @click="$emit('show')"
  >
    <img
      :src="image"
      :class="$style.image"
    />
    <div
      v-if="active"
      :class="$style.overlay"
    >
    </div>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" module>
.container {
  background-color: #fff;
  position: relative;
  border-radius: 0;

  &:hover {
    opacity: .7;
  }
}

.active {
  background-color: transparent;
}

.overlay {
  --overlay-color: #fff;

  --width: 1px;
  background: repeating-linear-gradient(
      135deg,
      transparent,
      transparent 1px,
      #fff 1px,
      #fff 2px
  );
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.image {
  max-width: 80%;
}
</style>

<style src="@/stylesheets/card.scss" lang="scss" module="$card" />
