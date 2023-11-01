import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  return (
    <div
      className={classNames(classes.Sidebar, {[classes.collapsed]: isCollapsed}, [className])}
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
