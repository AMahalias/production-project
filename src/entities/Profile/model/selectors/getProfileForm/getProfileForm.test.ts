import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileForm.test', () => {
  test('should return value', () => {
    const data = {
      first: 'TestName',
      lastname: 'TestLastname',
      age: 28,
      country: Country.Ukraine,
      username: 'admin',
      city: 'City',
      currency: Currency.UAH,
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  })
})
