import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterState } from './state';

export interface CreateAccountPayload {
  email: string;
  name: string;
  password: string;
}

export const createAccount = createAsyncThunk(
  'register/createAccount',
  async (state: CreateAccountPayload) => {
    // TODO call a real endpoint.
    return await new Promise<Partial<RegisterState>>((resolve) => {
      setTimeout(
        () =>
          resolve({
            id: 'abc-123',
            email: 'juan@merlinjobs.com',
            name: 'Bruno',
          }),
        2000,
      );
    });
  },
);

export const savePhoto = createAsyncThunk('register/savePhoto', async (photo: File) => {
  // TODO call a real endpoint.
  return 'http://lorempixel.com/500/500/animals';
});

export const saveNick = createAsyncThunk('register/saveNick', async (nickname: string) => {
  // TODO call a real endpoint.
  return nickname;
});

export const saveType = createAsyncThunk(
  'register/saveType',
  async (type: Pick<RegisterState, 'species' | 'race' | 'color'>) => {
    // TODO call a real endpoint.
    return type;
  },
);

export const saveBirthDate = createAsyncThunk('register/saveBirthDate', async (date: Date) => {
  // TODO call a real endpoint.
  return date;
});
