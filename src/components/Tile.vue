<template>
  <div :class="[$style.container, { [$style.containerFade]: description }]">
    <button
      :class="$style.button"
      @click="$emit('close')"
    >
      <svg :class="$style.closeIcon">
        <use xlink:href="#icon_close" />
      </svg>
    </button>
    <div :class="$style.content">
      <h2 :class="$style.title">{{ title }}</h2>
      <div
        v-if="!description"
        :class="$style.contentInner"
      >
        <button :class="[$style.navButton, $style.navButtonBack]">←</button>
        <button :class="[$style.navButton, $style.navButtonNext]">→</button>
        <img
          :src="image"
          :class="$style.image"
          @click="$emit('toggleDescription')"
        />
        <div :class="$style.navContainer">
          <nav :class="$style.nav">
            <span :class="$style.navCaption">пупыры</span>
          </nav>
        </div>
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
export default {
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
  },
  methods: {
    toggleDescription(flag) {
      this.$store.commit('toggleDescription', flag);
    },
  },
};
</script>

<style lang="css" module>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(70, 70, 70, .8);
  color: #fff;
  z-index: 10;
  display: flex;
  flex-direction: column;
  font-family: var(--font-playfair);
  transition: background-color .2s;
}

.containerFade {
  background-color: rgba(70, 70, 70, .97);
}

.button {
  position: absolute;
  right: 2vw;
  top: 2vw;
  width: 6vw;
  height: 6vw;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0;
}

.closeIcon {
  width: 6vw;
  height: 6vw;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contentInner {
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 10vw;
  font-weight: 900;
  line-height: 1;
  margin-top: .5em;
  margin-bottom: .5em;
  padding-left: 10vw;
  padding-right: 10vw;
}

.image {
  max-width: 80%;
}

.image {
  order: 2;
}

.navButton {
  width: 8vw;
  height: 8vw;
  font-size: 4vw;
}

.navButtonBack {
  order: 1;
  margin-left: 1vw;
}

.navButtonNext {
  order: 3;
  margin-right: 1vw;
}

.navContainer {
  position: absolute;
  bottom: 2vw;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.nav {
  width: 24vw;
  height: 6vw;
  background-color: rebeccapurple;
  text-align: center;
  position: relative;
}

.navCaption {
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 3vw;
  line-height: 1;
  font-style: italic;
}

.text {
  padding-left: 10vw;
  padding-right: 10vw;
  font-size: 4vw;
  line-height: 1.6;
}
</style>
