import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice';
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { updateProfileData } from 'entities/Profile'

const data = {
  first: 'TestName',
  lastname: 'TestLastname',
  age: 28,
  country: Country.Ukraine,
  username: 'admin',
  city: 'City',
  currency: Currency.UAH,
}

describe('profileSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true })
  });

  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    })
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR]
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    })
  });
});
