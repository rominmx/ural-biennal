const toggleGroup = (state, { groupID, flag }) => {
  const foundGroup = state.groups.find(group => group.id === groupID);

  if (foundGroup !== undefined) {
    foundGroup.visible = flag;
  }
};

const setCurrentGroup = (state, { group, flag }) => {
  if (flag) {
    state.group = group;
  } else {
    state.group = null;
  }
};

const toggleItem = (state, { groupID, id, flag }) => {
  const foundGroup = state.groups.find(group => group.id === groupID);

  if (foundGroup !== undefined && foundGroup.visible) {
    const foundItem = foundGroup.items.find(item => item.id === id);

    if (foundItem !== undefined) {
      foundItem.visible = flag;
    }
  }
};

const setCurrentItem = (state, { id, flag }) => {
  if (flag) {
    state.item = id;
  } else {
    state.item = null;
  }
};

const toggleDescription = (state, flag) => {
  state.description = flag;
};

export default {
  setCurrentGroup,
  setCurrentItem,
  toggleDescription,
  toggleGroup,
  toggleItem,
};
