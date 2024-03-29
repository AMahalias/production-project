import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticleViewSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleView } from 'entities/Article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  }
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
  const { t } = useTranslation()

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  }

  return (
    <div className={classNames(classes.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(viewType => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', {[classes.selected]: viewType.view === view})}
          />
        </Button>
      ))}
    </div>
  )
})
