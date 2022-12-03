import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import { Slider } from '.'

const HorizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const VerticalSettings: Settings = {
  vertical: true,
  dots: true,
  infinite: false,
  slidesToShow: 1,
  verticalSwiping: true
}

const Slide = styled.div`
  background-color: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export default {
  title: 'Slider',
  component: Slider
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Slide key={index + 1}>{index + 1}</Slide>
    ))}
  </Slider>
)

export const Horizontal = Template.bind({})

Horizontal.args = {
  settings: HorizontalSettings
}

export const Vertical = Template.bind({})

Vertical.args = {
  settings: VerticalSettings
}
