import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Most Populars',
    color: 'white',
    lineLeft: false,
    lineBottom: false,
    lineColor: 'primary',
    size: 'medium'
  }
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
