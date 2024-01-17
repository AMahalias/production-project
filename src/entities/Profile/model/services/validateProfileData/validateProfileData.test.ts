import { validateProfileData } from './validateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ValidateProfileError } from 'entities/Profile'

const data = {
  first: 'TestName',
  lastname: 'TestLastname',
  age: 28,
  country: Country.Ukraine,
  username: 'admin',
  city: 'City',
  currency: Currency.UAH,
}

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  })

  test('without first and last names', async () => {
    const result = validateProfileData({...data, first: '', lastname: ''});

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  })

  test('incorrect age', async () => {
    const result = validateProfileData({...data, age: undefined});

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  })

  test('incorrect city', async () => {
    const result = validateProfileData({...data, city: ''});

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  })

  test('no data', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  })
})
