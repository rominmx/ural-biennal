<template>
  <ul :class="$style.tiles">
    <tile></tile>
    <tile></tile>
    <tile></tile>
    <tile></tile>
    <tile></tile>
    <tile></tile>
    <tile></tile>
    <tile></tile>
  </ul>
</template>

<script>
import Tile from '@/components/Tile.vue';

export default {
  components: {
    Tile,
  },
};
</script>

<style lang="scss" module>
@import '../stylesheets/variables';

.tiles {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  list-style-type: none;
  padding: $tile-gap;
}
</style>
