<template>
  <nav :class="$card.navContainer">
    <svg
      v-for="n in length"
      :key="n"
      viewBox="0 0 24 24"
      :class="[$style.item]"
    >
      <circle :r="getRadius(n)" cx="12" cy="12" fill="#fff" />
    </svg>
  </nav>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getRadius(i) {
      if (i === this.index + 1) return 12;

      return 8;
    },
  },
};
</script>

<style lang="scss" src="@/stylesheets/cardInfo.scss" module="$card" />

<style lang="scss" module>
.container {
  align-items: center;
}

.item {
  width: 2vw;
  height: 2vw;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 2vw;

  &:not(:last-child) {
    margin-right: 2.6vw;
  }
}
</style>
