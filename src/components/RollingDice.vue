<template>
  <button
    :class="[$card.container, $style.container]"
    @click="$emit('click')"
  >
    <svg>
      <use xlink:href="#icon_dice" />
    </svg>
    <span :class="$style.caption">перемешать</span>
  </button>
</template>

<style lang="scss" module>
.container {
  background-color: transparent;
  border-radius: 3px;
  flex-direction: column;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  svg {
    width: 60%;
    fill: #fff;
  }
}

.caption {
  color: #fff;
  line-height: 1;
  font-size: 3.5vw;
  font-family: var(--font-playfair);
  font-weight: 400;
  font-style: italic;
  position: relative;
  bottom: 2.4em;
}
</style>

<style src="@/stylesheets/card.scss" lang="scss" module="$card" />
