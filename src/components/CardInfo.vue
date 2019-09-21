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
        v-if="!description"
        :class="$style.contentInner"
      >
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
          :src="image"
          :class="$style.image"
          @click="$emit('toggleDescription')"
        />
        <card-navigation
          :index="itemIndex"
          :length="groupLength"
        />
      </div>
      <div
        v-else
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
import Control from './Control.vue';
import CardNavigation from './CardNavigation.vue';

export default {
  components: {
    CardNavigation,
    Control,
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
};
</script>

<style lang="scss" src="@/stylesheets/cardInfo.scss" module />
<style lang="scss" src="@/stylesheets/controls.scss" module="$controls" />
