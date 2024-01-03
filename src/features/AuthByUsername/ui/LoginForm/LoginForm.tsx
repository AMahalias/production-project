import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
}

// eslint-disable-next-line react/display-name
const LoginForm = memo(({ className }: LoginFormProps) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
  <DynamicModuleLoader
    reducers={initialReducers}
    removeAfterUnmount
  >
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
  </DynamicModuleLoader>
  );
});

export default LoginForm;
