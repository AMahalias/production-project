import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from 'entities/Profile'

describe('getProfileReadonly.test', () => {
  test('should return error', () => {
    const errors = [
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_AGE,
    ]

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      }
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  })
})
