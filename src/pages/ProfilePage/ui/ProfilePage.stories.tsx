import ProfilePage from './ProfilePage'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import AvatarImg from 'shared/assets/tests/defaultAvatar.jpeg'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'TestName',
      lastname: 'TestLastname',
      age: 28,
      country: Country.Ukraine,
      username: 'admin',
      city: 'City',
      currency: Currency.UAH,
      avatar: AvatarImg,
    }
  }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'TestName',
      lastname: 'TestLastname',
      age: 28,
      country: Country.Ukraine,
      username: 'admin',
      city: 'City',
      currency: Currency.UAH,
      avatar: AvatarImg,
    }
  }
})];
