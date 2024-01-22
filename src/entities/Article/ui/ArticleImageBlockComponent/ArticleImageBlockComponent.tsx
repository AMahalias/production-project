import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticleImageBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleImageBlock } from 'entities/Article/model/types/article'
import { Text, TextAlign } from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={classes.img} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  )
});
