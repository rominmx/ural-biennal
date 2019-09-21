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
  background-color: #555555;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.image {
  max-width: 80%;
}
</style>

<style src="@/stylesheets/card.scss" lang="scss" module="$card" />
