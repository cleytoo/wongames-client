import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Highlight } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as ComponentMeta<typeof Highlight>

const Template: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const Default = Template.bind({})

export const WithFloatImage = Template.bind({})
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
  alignment: 'right',
  ...item
}
