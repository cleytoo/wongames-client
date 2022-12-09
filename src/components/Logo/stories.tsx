import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'white',
    size: 'normal',
    hideOnMobile: false
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
