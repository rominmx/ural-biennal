<template>
  <div id="app">
    <button
      v-for="tile in items"
      :key="`${tile.group}_${tile.id}`"
      :class="[$style.tile, { [$style.tileActive]: isActive({ group: tile.group, id: tile.id }) }]"
      @click="showTile({ group: tile.group, id: tile.id })"
    >
      <img
        :src="tile.image"
        :class="$style.image"
      />
      <div
        v-if="isActive({ group: tile.group, id: tile.id })"
        :class="$style.overlay"
      >
      </div>
    </button>
    <tile
      v-if="tileVisible"
      :title="currentItem.title"
      :image="currentItem.image"
      :description="description"
      :text="currentItem.description"
      @close="closeTile(currentItem.group, currentItem.id)"
      @toggleDescription="toggleDescription"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import Tile from '@/components/Tile.vue';

export default {
  components: {
    Tile,
  },
  computed: {
    ...mapGetters(['items', 'tileVisible', 'findItemByID']),
    ...mapState(['group', 'item', 'description']),
    currentItem() {
      const { group, item } = this;

      if (group && item) {
        return this.findItemByID(group, item);
      }

      return null;
    },
  },
  methods: {
    ...mapActions(['showTile', 'closeTile', 'toggleDescription']),
    isActive({ group, id }) {
      return group === this.group && id === this.item;
    },
  },
};
</script>

<style lang="css">
#app {
  display: grid;
  padding: var(--gap);
  box-sizing: border-box;
  grid-template-columns: repeat(var(--items-per-row), 1fr);
  grid-gap: var(--gap) var(--gap);
  background-color: var(--grey);
}
</style>

<style lang="scss" module>
.tile {
  --arg1: calc(var(--wrapper-width) - (var(--items-per-row) + 1) * var(--gap));
  --arg2: calc(var(--items-per-row) * var(--aspect-ratio));

  background-color: #fff;
  height: calc(var(--arg1) / var(--arg2));
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0;
  position: relative;

  &:hover {
    opacity: .7;
  }
}

.tileActive {
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
