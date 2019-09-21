<template>
  <div :class="[$style.container, { [$style.containerFade]: description }]">
    <control
      :class="$controls.buttonClose"
      icon="icon_close"
      @click="$emit('close')"
    />
    <div :class="$style.content">
      <h2 :class="$style.title">{{ title }}</h2>
      <div
        v-show="!description"
        :class="$style.contentInner"
      >
        <div :class="$style.sliderContainer">
          <control
            :class="[$controls.navButton, $controls.navButtonBack]"
            icon="icon_arrow"
            @click="$emit('goBack')"
          />
          <control
            :class="[$controls.navButton, $controls.navButtonNext]"
            icon="icon_arrow"
            @click="$emit('goNext')"
          />
          <img
            ref="image"
            :src="image"
            :class="$style.image"
            @click="$emit('toggleDescription')"
          />
        </div>
        <card-navigation
          :index="itemIndex"
          :length="groupLength"
        />
      </div>
      <div
        v-if="description"
        :class="$style.contentInner"
        @click="$emit('toggleDescription')"
      >
        <div
          :class="$style.text"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hammer from 'hammerjs';
import Control from './Control.vue';
import CardNavigation from './CardNavigation.vue';

export default {
  components: {
    CardNavigation,
    Control,
  },
  data() {
    return {
      element: null,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: [String, undefined],
      default: undefined,
    },
    description: {
      type: Boolean,
      default: false,
    },
    text: {
      type: [String, undefined],
      default: undefined,
    },
    groupLength: {
      type: Number,
      required: true,
    },
    itemIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleDescription(flag) {
      this.$store.commit('toggleDescription', flag);
    },
  },
  mounted() {
    this.element = new Hammer(this.$refs.image);

    this.element.on('swipeleft', () => {
      this.$emit('goNext');
    });

    this.element.on('swiperight', () => {
      this.$emit('goBack');
    });
  },
  beforeDestroy() {
    this.element.off('swipeleft swiperight', () => {});
    this.element = null;
  },
};
</script>

<style lang="scss" src="@/stylesheets/cardInfo.scss" module />
<style lang="scss" src="@/stylesheets/controls.scss" module="$controls" />
