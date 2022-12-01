import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { GameCard } from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 230,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    // const price = screen.getByText(props.price)

    expect(screen.getByText(props.price)).not.toHaveStyle(
      'text-decoration: line-through'
    )

    expect(screen.getByText(props.price)).toHaveStyle(
      'background-color: #3CD3C1'
    )
  })

  it('should render a line through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 100,00" />)
    // preço promocional tenha line-through
    expect(screen.getByText('R$ 100,00')).not.toHaveStyle(
      'text-decoration: line-through'
    )
    // preço novo não tenha line-through
    expect(screen.getByText(props.price)).toHaveStyle(
      'text-decoration: line-through'
    )
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    const buttonFav = screen.getAllByRole('button')[0]
    fireEvent.click(buttonFav)

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle('background-color: #3cd3c1')
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
