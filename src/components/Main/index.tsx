import * as S from './styles'

export const Main = ({
  title = 'React Avançado',
  description = 'Typescript, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.Illustration src="/img/hero-illustration.svg" alt="" />
  </S.Wrapper>
)
