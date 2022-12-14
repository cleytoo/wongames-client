import { Button } from 'components/Button'
import { Ribbon, RibbonColors, RibbonSizes } from 'components/Ribbon'
import { Heart, ShoppingCart } from 'phosphor-react'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

export const GameCard = (props: GameCardProps) => {
  const {
    developer,
    img,
    price,
    title,
    promotionalPrice,
    favorite = false,
    onFav,
    ribbon,
    ribbonColor = 'primary',
    ribbonSize = 'small'
  } = props
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton onClick={onFav} role="button">
          {favorite ? (
            <Heart size={22} aria-label="Remove from Wishlist" weight="fill" />
          ) : (
            <Heart size={22} aria-label="Add to Wishlist" weight="bold" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<ShoppingCart size={20} />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}
