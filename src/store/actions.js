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

export default {
  closeTile,
  showTile,
  toggleDescription,
};
