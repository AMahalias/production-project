import { classNames, Mods } from 'shared/lib/classNames/classNames'
import classes from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const optionsList = useMemo(() =>
    options?.map(opt => (
      <option
        className={classes.option}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    )), [options])

  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  }

  return (
    <div className={classNames(classes.wrapper, mods, [className])}>
      {label && (
        <span className={classes.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={classes.Select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
