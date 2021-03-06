import React from 'react'
import { render } from 'test-utils'

import Heading from 'components/atoms/Heading'

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
