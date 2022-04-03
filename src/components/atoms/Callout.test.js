import React from 'react'
import { render, screen } from 'test-utils'

import Callout from 'components/atoms/Callout'

import SpeedSVG from 'draws/Speed'

describe('Callout component', () => {
  test('renders the CalloutBody', () => {
    render(
      <>
        <Callout>
          <Callout.Body>
            <h6>Faça a sua matrícula agora mesmo</h6>
          </Callout.Body>
        </Callout>
      </>
    )

    expect(screen.getByText('Faça a sua matrícula agora mesmo')).toBeInTheDocument()
  })

  test('renders the CalloutImage', () => {
    const { container } = render(
      <>
        <Callout>
            <Callout.Image>
              <SpeedSVG />
            </Callout.Image>
        </Callout>
      </>
    )

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  test('renders CalloutActions', () => {
    render(
      <>
        <Callout>
          <Callout.Actions>
            <button>saiba mais</button>
          </Callout.Actions>
        </Callout>
      </>
    )

    expect(screen.getByText('saiba mais')).toBeInTheDocument()
  })
})
