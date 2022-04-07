import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

test('renders call to action', () => {
  render(<App />)

  expect(screen.getByText('Matricula-se agora')).toBeInTheDocument()
})

test('renders /about route', () => {
  render(
    <App />
  )

  const aboutLink = screen.getAllByRole('link', { name: 'saiba mais' })[3]
  userEvent.click(aboutLink)

  expect(screen.getByRole('heading', { name: 'Driving School', level: 1 })).toBeInTheDocument()
})

test('renders /servicos routes', () => {
  render(
    <App />
  )

  const homeLink = screen.getByRole('link', { name: 'Início' })
  userEvent.click(homeLink)

  const serviceLink = screen.getAllByRole('link', { name: 'saiba mais' })[0]
  userEvent.click(serviceLink)

  expect(screen.getByRole('heading', { name: '1ª Habilitação Carro e Moto' })).toBeInTheDocument()
})
