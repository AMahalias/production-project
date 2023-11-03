import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.Sidebar, {[classes.collapsed]: isCollapsed}, [className])}
    >
      <Button
        data-testid="btn-toggle"
        onClick={onToggle}
      >
        {t('toggle')}
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
