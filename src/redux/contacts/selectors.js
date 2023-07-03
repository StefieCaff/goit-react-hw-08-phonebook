const getPhonebook = state => state.data.contacts.items;
const getFilter = state => state.data.filter;

export { getPhonebook, getFilter };