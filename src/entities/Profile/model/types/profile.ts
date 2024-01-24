import { Currency } from 'entities/Currency/model/types/currency'
import { Country } from 'entities/Country/model/types/country'

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'Incorrect user data',
  INCORRECT_AGE = 'Incorrect age',
  INCORRECT_CITY = 'Incorrect country',
  NO_DATA = 'No user data',
  SERVER_ERROR = 'Server error',
}

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
