import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Icon.module.scss'
import { memo } from 'react'

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {

  return (
    <Svg className={classNames(classes.Icon, {}, [className])} />
  )
})
