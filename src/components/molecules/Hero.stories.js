import React from 'react'

import Hero from 'components/molecules/Hero'
import Heading from 'components/atoms/Heading'
import Button from 'components/atoms/Button'

import StreetImage from 'stories/assets/street.jpg'
import BgCarImage from 'stories/assets/bg-car.jpg'

export default {
  title: 'Components/Hero',
  component: Hero
}

export const usage = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>Ganhe a sua <strong>liberdade</strong> <br /> para ir e vir</h1>
    </Heading>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
  </Hero>
)

export const withList = () => (
  <Hero image={StreetImage}>
    <Heading>
      <h1>Ganhe a sua <strong>liberdade</strong> <br /> para ir e vir</h1>
    </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Et doloremque nesciunt sint animi placeat molestiae suscipit.</li>
        <li>Nemo similique adipisci inventore voluptatum at. Dolorem ullam</li>
      </ul>
    <Button variant={Button.variants.outlined} color={Button.colors.primary} >Matricula-se agora</Button>
  </Hero>
)
