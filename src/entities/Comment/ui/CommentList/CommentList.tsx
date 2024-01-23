import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentList.module.scss';
import { memo } from 'react';
import { Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard
            key={comment.id}
            className={classes.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('Comments are empty')} />
      }
    </div>
  )
})
