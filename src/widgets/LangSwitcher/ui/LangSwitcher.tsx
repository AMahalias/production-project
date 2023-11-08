import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames('', {}, [className])}
    >
      {t('language')}
    </Button>
  );
};
