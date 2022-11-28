import { Button } from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  Subtitle: string
  buttonLabel: string
  buttonLink: string
}

export const Banner = (props: BannerProps) => {
  const { img, title, Subtitle, buttonLabel, buttonLink } = props
  return (
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={title} />
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: Subtitle }} />

        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}
