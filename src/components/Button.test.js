import React from 'react'

import { render, screen } from 'test-utils'

import Button from 'components/Button'
import { fireEvent } from '@testing-library/react'

describe('Button', () => {
  const handleClick = jest.fn()

  const colors = Object.values(Button.colors).flatMap(color => [[color]])
  const variants = Object.values(Button.variants).flatMap(variant => [[variant]])

  test('renders a text', () => {
    render(<Button onClick={handleClick}>Click Here</Button>)

    expect(screen.getByText('Click Here')).toBeInTheDocument()
  })

  test('trigger event on click', () => {
    render(<Button onClick={handleClick}/>)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })

  test.each(colors)('renders with color %s', (color) => {
    const { asFragment } = render(<Button onClick={handleClick} color={color} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test.each(variants)('renders with variant %s', (color) => {
    const { asFragment } = render(<Button onClick={handleClick} variant={color} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with color primary and variant outlined', () => {
    const { asFragment } = render(<Button onClick={handleClick} variant="outlined" color='primary' />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with color primary and variant link', () => {
    const { asFragment } = render(<Button onClick={handleClick} variant="link" color='primary' />)

    expect(asFragment()).toMatchSnapshot()
  })
})
