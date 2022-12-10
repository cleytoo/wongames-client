import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Radio } from '.'

export default {
  title: 'Radio',
  component: Radio,
  args: {
    labelColor: 'white'
  },
  argTypes: {
    value: {
      type: 'symbol'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <Radio
      label="primeiro"
      labelFor="primeiro"
      id="primeiro"
      name="nome"
      value="primeiro"
      defaultChecked
      {...args}
    />
    <Radio
      label="segundo"
      labelFor="segundo"
      id="segundo"
      name="nome"
      value="segundo"
      {...args}
    />
    <Radio
      label="terceiro"
      labelFor="terceiro"
      id="terceiro"
      name="nome"
      value="terceiro"
      {...args}
    />
  </div>
)

export const Default = Template.bind({})
