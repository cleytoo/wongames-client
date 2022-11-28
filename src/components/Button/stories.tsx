import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ShoppingCart } from 'phosphor-react'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Buy now',
    size: 'medium',
    fullWidth: false
  },
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

export const withIcon = Template.bind({})
withIcon.args = {
  icon: <ShoppingCart />
}

export const asLink = Template.bind({})
asLink.args = {
  as: 'a',
  size: 'medium',
  href: '/link'
}
