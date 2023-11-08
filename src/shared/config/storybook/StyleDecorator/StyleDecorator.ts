import 'app/styles/index.scss';
import { DecoratorFunction } from '@storybook/csf';
import { ReactRenderer, Story } from '@storybook/react'

export const StyleDecorator: DecoratorFunction<ReactRenderer, any> = (Story, context) => {
  const storyResult = Story(context);

  return storyResult;
};
