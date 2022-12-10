import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
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
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
    <Checkbox {...args} name="category" label="Action" labelFor="action" />
    <Checkbox
      {...args}
      isChecked
      name="category"
      label="Adventure"
      labelFor="adventure"
    />
    <Checkbox {...args} name="category" label="Strategy" labelFor="strategy" />
  </div>
)

export const Default = Template.bind({})
