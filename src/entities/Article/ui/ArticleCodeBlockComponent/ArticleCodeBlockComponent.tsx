import { classNames } from 'shared/lib/classNames/classNames'
import classes from './ArticleCodeBlockComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleCodeBlock } from 'entities/Article/model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
});
