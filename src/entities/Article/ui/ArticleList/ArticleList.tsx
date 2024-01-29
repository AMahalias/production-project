import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticleList.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton key={index} view={view} className={classes.card} />
    ))
}

export const ArticleList = memo(({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL
}: ArticleListProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        article={article}
        view={view}
        className={classes.card}
      />
    )
  };

  return (
    <div className={classNames(classes.ArticleList, {}, [className, classes[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null
      }
    </div>
  )
})
