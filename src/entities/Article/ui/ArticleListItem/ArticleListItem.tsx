import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticleListItem.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Article, ArticleTextBlock, ArticleTypeBlock, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import { useHover } from 'shared/lib/hooks/useHover/useHover'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
  const { t } = useTranslation();
  const [isHover, bindHover] = useHover();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  const types = <Text text={article.type.join(', ')} className={classes.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={classes.views} />
      <Icon Svg={EyeIcon} />
    </>
  );
  console.log(isHover);

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleTypeBlock.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={classes.username} />
            <Text text={article.createdAt} className={classes.date} />
          </div>
          <Text title={article.title} className={classes.title} />
          {types}
          <img src={article.img} className={classes.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={classes.textBlock} />
          )}
          <div className={classes.footer}>
            <Button onClick={onOpenArticle}>
              {t('Read more...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div {...bindHover} className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
      <Card onClick={onOpenArticle} className={classes.card}>
        <div className={classes.imageWrapper}>
          <img src={article.img} alt={article.title} className={classes.img} />
          <Text text={article.createdAt} className={classes.date} />
        </div>
        <div className={classes.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={classes.title} />
      </Card>
    </div>
  )
})
