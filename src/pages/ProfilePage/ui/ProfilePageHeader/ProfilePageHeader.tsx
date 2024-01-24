import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const {t} = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
      <Text title={t('title')} />
      {canEdit && (
        <div className={classes.btnsWrapper}>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                className={classes.btn}
                onClick={onEdit}
              >
                {t('button-edit')}
              </Button>
            )
            : (
              <>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  className={classes.btn}
                  onClick={onCancelEdit}
                >
                  {t('button-cancel')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  className={classes.saveBtn}
                  onClick={onSave}
                >
                  {t('button-save')}
                </Button>
              </>
            )
          }
        </div>
      )}
    </div>
  );
};
