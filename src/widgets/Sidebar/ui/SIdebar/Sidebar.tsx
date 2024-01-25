import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux'
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems'

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const { t } = useTranslation();

  const onToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  const itemsList = useMemo(() => sidebarItemsList.map(item => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={isCollapsed}
    />
  )), [isCollapsed, sidebarItemsList]);

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
        {itemsList}
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
      </div>
    </div>
  );
});
