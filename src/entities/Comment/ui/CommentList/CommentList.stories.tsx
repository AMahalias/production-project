import { CommentList } from './CommentList'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'some comment',
      user: { id: '1', username: 'Vasya' }
    },
    {
      id: '2',
      text: 'some comment 2',
      user: { id: '2', username: 'Asya' }
    }
  ]
}

export const Loading = Template.bind({})
Loading.args = {
  comments: [],
  isLoading: true,
}
