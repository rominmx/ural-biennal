const showTile = ({ commit }, { group, id }) => {
  commit('setCurrentGroup', { group, flag: true });
  commit('toggleGroup', { groupID: group, flag: true });
  commit('setCurrentItem', { id, flag: true });
  commit('toggleItem', { groupID: group, id, flag: true });
};

const closeTile = ({ commit }, { group, id }) => {
  commit('setCurrentGroup', { group, flag: false });
  commit('toggleGroup', { groupID: group, flag: false });
  commit('setCurrentItem', { id, flag: false });
  commit('toggleItem', { groupID: group, id, flag: false });
  commit('toggleDescription', false);
};

const toggleDescription = ({ state, commit }) => {
  const { description } = state;

  commit('toggleDescription', !description);
};

const goBack = ({ state, getters, commit }) => {
  const { itemInfo } = getters;
  const currentIndex = itemInfo.index;
  const foundGroup = state.groups.find(groupItem => groupItem.id === state.group);
  const { items } = foundGroup;
  const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  const nextItemID = items[nextIndex].id;

  commit('setCurrentItem', { id: nextItemID, flag: true });
};

const goNext = ({ state, getters, commit }) => {
  const { itemInfo } = getters;
  const currentIndex = itemInfo.index;
  const foundGroup = state.groups.find(groupItem => groupItem.id === state.group);
  const { items } = foundGroup;
  const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  const nextItemID = items[nextIndex].id;

  commit('setCurrentItem', { id: nextItemID, flag: true });
};

const initOrder = ({ getters, commit }) => {
  // Create range
  const { items } = getters;
  const results = [];

  // eslint-disable-next-line
  for (let i = 0; i < items.length; i++) {
    results.push(i);
  }

  commit('setOrder', results);
};

// Fisher–Yates shuffle
const shuffleOrder = ({ state, commit }) => {
  const orderCopy = [...state.order];

  // eslint-disable-next-line
  for (let i = orderCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [orderCopy[i], orderCopy[j]] = [orderCopy[j], orderCopy[i]];
  }

  commit('setOrder', orderCopy);
};

export default {
  closeTile,
  goBack,
  goNext,
  initOrder,
  showTile,
  shuffleOrder,
  toggleDescription,
};
