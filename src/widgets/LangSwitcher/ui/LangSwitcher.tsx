import { classNames } from 'shared/lib/classNames/classNames'
import classes from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames(classes.LangSwitcher, {}, [className])}
    >
      {t('language')}
    </Button>
  );
};
