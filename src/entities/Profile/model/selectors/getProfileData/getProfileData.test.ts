import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileData.test', () => {
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
        data,
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  })
})
