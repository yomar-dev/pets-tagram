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

export const registerReducer = registerSlice.reducer;
