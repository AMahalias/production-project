import { ProfileCard } from './ProfileCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import AvatarImg from 'shared/assets/tests/defaultAvatar.jpeg';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'TestName',
    lastname: 'TestLastname',
    age: 28,
    country: Country.Ukraine,
    username: 'admin',
    city: 'City',
    currency: Currency.UAH,
    avatar: AvatarImg,
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'true'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
