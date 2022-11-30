import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Highlight } from '.'

const args = {
  title: 'Read Dead its back',
  subtitle: 'Come see Johns new adventures',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg'
}

export default {
  title: 'Highlight',
  component: Highlight,
  args
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
  ...args
}
