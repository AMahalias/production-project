import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsByArticleId
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  },[dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  })

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate])

  if (!id) {
    return (
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        {t('Article is not found')}
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>
          {t('Return to list')}
        </Button>
        <ArticleDetails id={id}/>
        <Text className={classes.commentTitle} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage);
