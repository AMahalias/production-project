import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentCard.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Comment } from '../../model/types/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(classes.CommentCard, {}, [className, classes.loading])}>
        <div className={classes.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={classes.username} />
        </div>
        <Skeleton width="100%" height={50} className={classes.text} />
      </div>
    )
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(classes.CommentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={classes.header}
      >
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={classes.username} title={comment.user.username} />
      </AppLink>
      <Text className={classes.text} text={comment.text} />
    </div>
  )
})
