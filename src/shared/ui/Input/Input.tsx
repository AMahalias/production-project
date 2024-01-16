import { classNames, Mods } from 'shared/lib/classNames/classNames'
import classes from './Input.module.scss';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus, caretPosition]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  }

  const mods: Mods = {
    [classes.readonly]: readonly,
  }

  return (
    <div className={classNames(classes.InputWrapper, {}, [className])}>
      {placeholder && (
        <div>
          {`${placeholder}>`}
        </div>
      )}
      <div className={classes.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={classes.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={classes.caret}
            style={{ left: `${caretPosition * 6}px` }}
          />
        )}
      </div>
    </div>
  );
});
