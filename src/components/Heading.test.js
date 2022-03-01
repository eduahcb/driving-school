import React from 'react'
import { render } from '@testing-library/react'

import Heading from 'components/Heading'

describe('Heading component', () => {
  test('match snapshot', () => {
    const { asFragment } = render(
      <Heading>
        <h1>Title </h1>
      </Heading>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
