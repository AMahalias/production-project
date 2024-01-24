import { CommentCard } from './CommentCard'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
  comment: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'user' }
  }
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}

