import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeName = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Text title={t('AuthForm')} />
      {error && (
        <Text text={t('error')} theme={TextTheme.ERROR} />
      )}
      <Input
        autoFocus
        className={classes.input}
        placeholder={t('Enter username')}
        onChange={onChangeName}
        value={username}
      />
      <Input
        autoFocus
        className={classes.input}
        placeholder={t('Enter password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={classes.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
