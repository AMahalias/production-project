import { classNames, Mods } from 'shared/lib/classNames/classNames'
import classes from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeLastname,
    onChangeFirstname,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const {t} = useTranslation('profile');
  const mods: Mods = {
    [classes.editing]: !readonly,
  };

  if (isLoading) {
    return (
      <div className={
        classNames(classes.ProfileCard, {}, [className, classes.loading])
      }>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={
        classNames(classes.ProfileCard, {}, [className, classes.error])
      }>
        <Text
          theme={TextTheme.ERROR}
          title={t('error-title')}
          text={t('error-text')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classNames(classes.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={classes.avatarWrapper}>
          <Avatar src={data?.avatar} alt='avatar' />
        </div>
      )}
      <div className={classes.data}>
        <Input
          value={data?.first}
          placeholder={t('Your name')}
          className={classes.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your surname')}
          className={classes.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Your age')}
          className={classes.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Your city')}
          className={classes.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('Your username')}
          className={classes.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Your avatar')}
          className={classes.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={classes.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={classes.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
