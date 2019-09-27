<template>
  <div id="app">
    <card
      v-for="tile in randomizedItems"
      :key="`${tile.group}_${tile.id}`"
      :image="tile.image"
      :random-index="tile.randomIndex"
      :active="isActive({ group: tile.group, id: tile.id })"
      @show="showTile({ group: tile.group, id: tile.id })"
    />
    <rolling-dice @click="shuffleOrder" />
    <card-info
      v-if="tileVisible"
      :title="currentItem.title"
      :image="currentItem.image"
      :description="description"
      :text="currentItem.description"
      :group-length="itemInfo.length"
      :item-index="itemInfo.index"
      @close="closeTile(currentItem.group, currentItem.id)"
      @toggleDescription="toggleDescription"
      @goBack="goBack"
      @goNext="goNext"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import Card from '@/components/Card.vue';
import CardInfo from '@/components/CardInfo.vue';
import RollingDice from '@/components/RollingDice.vue';

export default {
  components: {
    Card,
    CardInfo,
    RollingDice,
  },
  computed: {
    ...mapGetters(['randomizedItems', 'tileVisible', 'findItemByID', 'itemInfo']),
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
    ...mapActions([
      'showTile',
      'closeTile',
      'toggleDescription',
      'goBack',
      'goNext',
      'initOrder',
      'shuffleOrder',
    ]),
    isActive({ group, id }) {
      return group === this.group && id === this.item;
    },
  },
  watch: {
    tileVisible(value) {
      const html = document.getElementsByTagName('html')[0];

      if (value) {
        html.setAttribute('style', 'overflow-y: hidden;');
      } else {
        html.removeAttribute('style');
      }
    },
  },
  created() {
    this.initOrder();
    this.shuffleOrder();
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
