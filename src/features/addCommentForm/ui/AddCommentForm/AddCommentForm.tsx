import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormText
} from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(classes.AddCommentForm, {}, [className])}>
        <Input
          className={classes.input}
          placeholder={t('Enter comment text')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>
          {t('Send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default AddCommentForm;
