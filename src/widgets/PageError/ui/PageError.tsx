import { classNames } from 'shared/lib/classNames/classNames'
import classes from './PageError.module.scss';
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <h1>{t('error')}</h1>
      <Button onClick={reloadPage}>{t('refresh-page')}</Button>
    </div>
  );
};
