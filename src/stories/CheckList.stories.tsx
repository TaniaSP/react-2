import React from 'react'
import CheckList from '../components/CheckList'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../pages/index.scss'

const defaultObj: ComponentMeta<typeof CheckList> = {
  title: 'Components/CheckList component',
  component: CheckList,
  argTypes: {
    value: { control: '' }
  }
}

export default defaultObj

const Template: ComponentStory<typeof CheckList> = args => <CheckList {...args} />

export const Default = Template.bind({})
Default.args = {
  value: [],
  onSelected: (value: string[]) => { alert(value) }
}

export const Selected = Template.bind({})
Selected.args = {
  value: ['Adventure'],
  onSelected: (value: string[]) => { alert(value) }
}
