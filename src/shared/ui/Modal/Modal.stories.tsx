import { Modal } from './Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque delectus esse impedit molestiae sapiente sint. Asperiores in rerum veniam!',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque delectus esse impedit molestiae sapiente sint. Asperiores in rerum veniam!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
