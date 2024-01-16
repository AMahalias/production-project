import { Select } from './Select'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select case',
  options: [
    { value: '123', content: 'First option'},
    { value: '456', content: 'Second option'},
    { value: '789', content: 'Third option'},
  ]
};

