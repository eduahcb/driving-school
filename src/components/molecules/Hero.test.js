import React from 'react'
import { render, screen } from 'test-utils'

import Hero from 'components/molecules/Hero'

describe('Hero component', () => {
  test('should renders with children', () => {
    render(
      <Hero>
        <p>this is a text</p>
      </Hero>
    )

    expect(screen.getByText('this is a text')).toBeInTheDocument()
  })

  test('should render image background', () => {
    render(<Hero image="http://test/image.jpg" />)

    expect(screen.getByTestId('hero'))
      .toHaveStyleRule('background', 'url(http://test/image.jpg),rgba(0,0,0,0.4)')
  })
})
