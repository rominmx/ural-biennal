<template>
  <button
    :class="[$card.container, $style.container]"
    @click="handler"
  >
    <svg :class="[{ [$style.rotated]: rotated, [$style.reversed]: !rotated && !initial }]">
      <use xlink:href="#icon_refresh" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      initial: true,
      rotated: false,
    };
  },
  methods: {
    handler() {
      if (this.initial) {
        this.initial = false;
      }

      this.rotated = !this.rotated;
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" module>
@keyframes step-1 {
  to {
    transform: rotate(180deg);
  }
}

@keyframes step-2 {
  to {
    transform: rotate(180deg);
  }
}

.container {
  background-color: transparent;
  border-radius: 3px;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  svg {
    width: 60%;
    fill: #fff;

    &.reversed,
    &.rotated {
      animation-fill-mode: forwards;
      animation-duration: .3s;
      animation-timing-function: ease-in-out;
    }

    &.reversed {
      animation-name: step-1;
    }

    &.rotated {
      animation-name: step-2;
    }
  }
}

.caption {
  color: #fff;
  line-height: 1;
  font-size: 3.8vw;
  font-family: var(--font-playfair);
  font-weight: 400;
  font-style: italic;
  position: relative;
  bottom: 2.4em;
}
</style>

<style src="@/stylesheets/card.scss" lang="scss" module="$card" />
