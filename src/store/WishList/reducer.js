import { createSlice} from '@reduxjs/toolkit'

const listSlice = createSlice({
  name: 'list',
  initialState: {
    itemsInList: [],
  },
  reducers: {
    setItemInList: (state, action) => {
      state.itemsInList.push(action.payload)
    },
    deleteItemFromList: (state, action) => {
      state.itemsInList = state.itemsInList.filter(book => book.id !== action.payload)
    },
  }
});

export const { setItemInList, deleteItemFromList } = listSlice.actions;
export default listSlice.reducer;

