import classes from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/items'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const {t} = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && item.authOnly) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(classes.item, {[classes.collapsed]: collapsed}, [])}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.link}>
          {t(item.text)}
        </span>
    </AppLink>
  );
};
