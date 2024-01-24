import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly, getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer, ValidateProfileError
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country/model/types/country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useParams } from 'react-router-dom'
import { userActions } from 'entities/User'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const {t} = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{id: string}>();

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [ValidateProfileError.INCORRECT_CITY]: t('Incorrect city'),
    [ValidateProfileError.NO_DATA]: t('No user data'),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({first: value || ''}))
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({lastname: value || ''}))
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    const numberPattern = /^[0-9]+$/

    if (value && numberPattern.test(value)) {
      dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({city: value || ''}))
  }, [dispatch]);

  const onChangUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({username: value || ''}))
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({avatar: value || ''}))
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch]);

  return (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames('', {}, [className])}>
      <ProfilePageHeader />
      {validateErrors?.length && validateErrors.map(err => (
        <Text
          key={err}
          theme={TextTheme.ERROR}
          text={validateErrorTranslates[err]}
        />
      ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  </DynamicModuleLoader>
  );
};

export default ProfilePage;
