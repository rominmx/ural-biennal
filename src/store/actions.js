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

export default {
  closeTile,
  goBack,
  goNext,
  showTile,
  toggleDescription,
};
