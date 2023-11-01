import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to={'/'} className={classes.mainLink}>{t('main-link')}</AppLink>
        <AppLink to={'/about'}>{t('about-link')}</AppLink>
      </div>
    </div>
  );
};
