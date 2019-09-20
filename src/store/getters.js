const items = (state) => {
  const results = [];

  state.groups.forEach((group) => {
    const groupItems = group.items;

    groupItems.forEach((item) => {
      results.push({
        ...item,
        group: group.id,
        title: group.title,
        description: group.description,
      });
    });
  });

  return results;
};

// eslint-disable-next-line
const findItemByID = (state, getters) => (groupID, id) => {
  return getters.items.find(item => item.group === groupID && item.id === id);
};

const tileVisible = state => state.group !== null && state.item !== null;

export default {
  findItemByID,
  items,
  tileVisible,
};
