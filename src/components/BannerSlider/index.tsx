import { Banner, BannerProps } from 'components/Banner'
import { Slider } from 'components/Slider'
import { Settings } from 'react-slick'
import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: Settings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

export const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner {...item} key={item.title} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}
