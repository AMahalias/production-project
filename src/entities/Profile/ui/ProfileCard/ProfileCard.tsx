import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const {t} = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(classes.ProfileCard, {}, [className])}>
      <div className={classes.header}>
        <Text title={t('title')} />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classes.btn}
        >
          {t('button')}
        </Button>
      </div>
      <div className={classes.data}>
        <Input
          value={data?.first}
          placeholder={t('Your name')}
          className={classes.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your surname')}
          className={classes.input}
        />
      </div>
    </div>
  );
};
