import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextField } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    icon: <Envelope data-testid="icon" />,
    iconPosition: 'left'
  },
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const Default = Template.bind({})

export const withError = Template.bind({})
withError.args = {
  error: 'Ops...something is wrong'
}
