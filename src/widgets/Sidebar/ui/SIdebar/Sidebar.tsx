import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { memo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={classes.items}>
        {SidebarItemsList.map(item => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={isCollapsed}
          />
        ))}
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
      </div>
    </div>
  );
});
