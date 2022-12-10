import { GameCard, GameCardProps } from 'components/GameCard'
import { Slider, SliderSettings } from 'components/Slider'
import { CaretLeft, CaretRight } from 'phosphor-react'
import * as S from './styles'

import { CustomArrowProps } from 'react-slick'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const Next = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
  <CaretRight aria-label="next games" weight="bold" {...props} />
)
const Prev = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
  <CaretLeft aria-label="previous games" weight="bold" {...props} />
)

const settings: SliderSettings = {
  arrows: true,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export const GameCardSlider = ({
  items,
  color = 'white'
}: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}
