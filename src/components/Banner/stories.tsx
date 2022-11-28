import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Banner } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://images.unsplash.com/photo-1634132386045-2eef4dbda885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    title: 'Defy death',
    Subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

export const Default = Template.bind({})
