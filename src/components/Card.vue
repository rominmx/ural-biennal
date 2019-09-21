<template>
  <button
    :class="[$card.container, $style.container, { [$style.active]: active }]"
    @click="$emit('show')"
  >
    <div :class="$style.inner">
      <div :class="$style.front">
        <img
          :src="image"
          :class="$style.image"
        />
      </div>
      <div :class="$style.back"></div>
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
  background-color: transparent;
  border-radius: 0;
  perspective: 1000px;

  &.active {
    .inner {
      transform: rotateY(180deg);
    }
  }

  &:hover {
    .front {
      background-color: rgba(255, 255, 255, .9);
    }
  }
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  transform-style: preserve-3d;
}

.active {
  background-color: transparent;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.front {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back {
  transform: rotateY(180deg);
  background: repeating-linear-gradient(
      135deg,
      transparent,
      transparent 1px,
      #fff 1px,
      #fff 2px
  );
}

.image {
  max-width: 80%;
}
</style>

<style src="@/stylesheets/card.scss" lang="scss" module="$card" />
