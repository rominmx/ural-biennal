<template>
  <li :class="$style.container"></li>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
@import '../stylesheets/variables';

.container {
  $width: ($screen-width - (2 * $tile-gap + ($tiles-per-row - 1) * $tile-gap)) / $tiles-per-row;
  $height: $width / $tile-proportions;

  background-color: #fff;
  width: $width;
  height: $height;
  margin-bottom: $tile-gap;
  margin-right: $tile-gap;

  &:nth-child(#{$tiles-per-row}n) {
    margin-right: 0 !important;
  }
}
</style>
