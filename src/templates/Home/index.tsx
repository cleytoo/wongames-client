import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { Highlight, HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Heading } from 'components/Heading'
import { Menu } from 'components/Menu'

import { BannerSlider } from 'components/BannerSlider'
import { GameCardSlider } from 'components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

export const Home = (props: HomeTemplateProps) => {
  const {
    banners,
    newGames,
    freeGames,
    freeHighligth,
    mostPopularGames,
    mostPopularHighlight,
    upcommingGames,
    upcommingHighligth,
    upcommingMoreGames
  } = props
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighligth} />
          <GameCardSlider items={upcommingMoreGames} />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free games
          </Heading>
          <Highlight {...freeHighligth} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}
