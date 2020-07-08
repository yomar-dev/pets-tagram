export interface RegisterState {
  id?: string;
  email?: string;
  name?: string;
  photo?: string;
  nick?: string;
  species?: string;
  race?: string;
  color?: string;
  birthDate?: Date;
  saving: RegisterStateLoader;
}

export type RegisterStateLoader = boolean;
