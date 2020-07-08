import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    id: null,
    email: null,
    name: null,
    photo: null,
    nick: null,
    type: null,
    race: null,
    color: null,
    birthDate: null,
    loader: false,
  },
  reducers: {
    createAccount() {},
    savePhoto() {},
    saveNick() {},
    saveType() {},
    saveBirthDate() {},
  },
});

export const {
  createAccount,
  savePhoto,
  saveNick,
  saveType,
  saveBirthDate,
} = registerSlice.actions;

export const incrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(createAccount());
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProfile = (state) => state;

export default registerSlice.reducer;
