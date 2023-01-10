import React from 'react'
import Logo from '../components/Logo'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const defaultObj: ComponentMeta<typeof Logo> = {
  title: 'Components/Logo component',
  component: Logo
}

export default defaultObj

const Template: ComponentStory<typeof Logo> = () => <Logo />
Template.bind({})

export const Primary = Template.bind({})
