import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Menu } from '.'

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Default = Template.bind({})

Default.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    default: 'dark'
  }
}
