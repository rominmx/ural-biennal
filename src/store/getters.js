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

const randomizedItems = (state, getters) => {
  if (!state.order.length) return getters.items;

  const results = [];

  state.order.forEach((index) => {
    results.push({
      ...getters.items[index],
      randomIndex: index,
    });
  });

  return results;
};

// eslint-disable-next-line
const findItemByID = (state, getters) => (groupID, id) => {
  return getters.items.find(item => item.group === groupID && item.id === id);
};

const tileVisible = state => state.group !== null && state.item !== null;

const itemInfo = (state) => {
  const { item, group, groups } = state;

  if (group !== null && item !== null) {
    const foundGroup = groups.find(groupItem => groupItem.id === group);

    if (foundGroup === undefined) return null;

    const groupItems = foundGroup.items;
    let index;
    const { length } = groupItems;

    // eslint-disable-next-line
    for (let i = 0; i < length; i++) {
      if (groupItems[i].id === item) {
        index = i;
        break;
      }
    }

    if (index !== undefined) {
      return {
        index,
        length,
      };
    }

    return null;
  }

  return null;
};

export default {
  findItemByID,
  itemInfo,
  items,
  randomizedItems,
  tileVisible,
};
