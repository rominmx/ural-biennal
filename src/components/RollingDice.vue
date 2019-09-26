<template>
  <button
    :class="[$card.container, $style.container]"
    @click="handler"
  >
    <svg :class="[{ [$style.rotated]: rotated }]">
      <use xlink:href="#icon_refresh" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      rotated: false,
    };
  },
  methods: {
    handler() {
      this.rotated = !this.rotated;
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" module>
.container {
  background-color: transparent;
  border-radius: 3px;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  svg {
    width: 60%;
    fill: #fff;
    transition: transform .3s ease-out;

    &.rotated {
      transform: rotate(180deg);
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
