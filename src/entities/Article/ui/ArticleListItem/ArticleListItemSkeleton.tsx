import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticleListItem.module.scss'
import { memo } from 'react'
import { ArticleView } from '../../model/types/article'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {

    return (
      <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Skeleton border={'50%'} height={30} width={30} />
            <Skeleton width={150} height={16} className={classes.username} />
            <Skeleton width={150} height={16} className={classes.date} />
          </div>
          <Skeleton width={250} height={24} className={classes.title} />
          <Skeleton height={200} className={classes.img} />
          <div className={classes.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
      <Card className={classes.card}>
        <div className={classes.imageWrapper}>
          <Skeleton width={200} height={200} className={classes.img} />
        </div>
        <div className={classes.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={classes.title} />
      </Card>
    </div>
  )
})
