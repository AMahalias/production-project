import { BrowserRouter } from 'react-router-dom'
import { ReactRenderer, Story } from '@storybook/react'
import { DecoratorFunction } from '@storybook/csf'

export const RouterDecorator: DecoratorFunction<ReactRenderer, any> = (Story, context) => {
  const storyResult = Story(context);

  return (
    <BrowserRouter>
      {storyResult}
    </BrowserRouter>
  )
}
