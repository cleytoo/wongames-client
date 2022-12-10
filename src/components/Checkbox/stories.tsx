import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    isChecked: true,
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
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <Checkbox name="category" label="Action" labelFor="action" {...args} />
    <Checkbox
      name="category"
      label="Adventure"
      labelFor="adventure"
      {...args}
    />
    <Checkbox name="category" label="Strategy" labelFor="strategy" {...args} />
  </div>
)

export const Default = Template.bind({})
