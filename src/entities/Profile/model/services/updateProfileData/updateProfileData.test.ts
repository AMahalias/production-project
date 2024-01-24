import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
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
  id: '1',
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      }
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ])
  })

  test(' validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {...data, first: ''},
      }
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ])
  })
})
