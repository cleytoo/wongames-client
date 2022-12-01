import { ComponentMeta, ComponentStory } from '@storybook/react'
import { GameCard } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 230,00',
    promotionalPrice: 'R$ 200,00',
    favorite: false
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'symbol'
    },
    ribbonColor: {
      type: 'symbol'
    },
    ribbonSize: {
      type: 'symbol'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof GameCard>

const Template: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const Default = Template.bind({})

export const WithRibbon = Template.bind({})

WithRibbon.argTypes = {
  ribbon: {
    type: 'string',
    defaultValue: '20% OFF'
  },
  ribbonColor: {
    defaultValue: 'primary',
    control: 'select',
    options: ['primary', 'secondary']
  },
  ribbonSize: {
    defaultValue: 'normal',
    control: 'select',
    options: ['normal', 'small']
  }
}
