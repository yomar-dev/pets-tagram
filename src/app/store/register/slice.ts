import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterState } from './state';
import { createAccount, saveBirthDate, saveNick, savePhoto, saveType } from './actions';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    saving: false,
  } as RegisterState,
  reducers: {},
  extraReducers: {
    [createAccount.fulfilled.type]: (state, action: PayloadAction<Partial<RegisterState>>) => {
      state.saving = false;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    [savePhoto.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.saving = false;
      state.photo = action.payload;
    },
    [saveNick.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.saving = false;
      state.nick = action.payload;
    },
    [saveType.fulfilled.type]: (
      state,
      action: PayloadAction<Pick<RegisterState, 'species' | 'race' | 'color'>>,
    ) => {
      state.saving = false;
      state.species = action.payload.species;
      state.race = action.payload.race;
      state.color = action.payload.color;
    },
    [saveBirthDate.fulfilled.type]: (state, action: PayloadAction<Date>) => {
      state.saving = false;
      state.birthDate = action.payload;
    },
  },
});

export const registerReducer = registerSlice.reducer;
