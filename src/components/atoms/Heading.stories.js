import React from 'react'

import Heading from 'components/atoms/Heading'

export default {
  title: 'Components/Heading',
  component: Heading
}

export const usage = () => (
  <>
    <Heading>
      <h1>Título 1</h1>
    </Heading>
    <Heading>
      <h2>Título 2</h2>
    </Heading>
    <Heading>
      <h3>Título 3</h3>
    </Heading>
    <Heading>
      <h4>Título 4</h4>
    </Heading>
    <Heading>
      <h5>Título 5</h5>
    </Heading>
    <Heading>
      <h6>Título 6</h6>
    </Heading>
  </>
)
