import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';
import { memo } from 'react'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo(({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => {
  return (
    <div className={classNames(classes.Text, {}, [className, classes[theme]])}>
      {title && (<p className={classes.title}>{title}</p>)}
      {text && (<p className={classes.text}>{text}</p>)}
    </div>
  );
});
