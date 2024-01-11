import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button  = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [classes.square]: square,
    [classes.disabled]: disabled,
  };

  return (
    <button
      className={classNames(classes.Button, mods, [className, classes[theme], classes[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
