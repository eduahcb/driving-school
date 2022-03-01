import React from 'react'

import Hero from 'components/Hero'

import StreetImage from 'stories/assets/street.jpg'
import BgCarImage from 'stories/assets/bg-car.jpg'

export default {
  title: 'Hero',
  component: Hero
}

export const usage = () => (
  <Hero image={BgCarImage}>
    <h1>Ganhe a sua <strong>liberdade</strong> <br /> para ir e vir</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque</p>
  </Hero>
)

export const withList = () => (
  <Hero image={StreetImage}>
    <h1>Ganhe a sua <strong>liberdade</strong> <br /> para ir e vir</h1>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim architecto ea inventore, veritatis doloribus mollitia? Ipsum sed quaerat iste perspiciatis voluptatem laudantium quo aperiam, esse assumenda, ex vel praesentium!</li>
      <li>Et doloremque nesciunt sint animi placeat molestiae suscipit provident ad, sit quibusdam repellat? Quisquam in, dolorem, expedita, totam numquam hic distinctio nihil ducimus eos natus maxime explicabo porro! Voluptatum, eum.</li>
      <li>Nemo similique adipisci inventore voluptatum at. Dolorem ullam, sapiente numquam maxime, sunt eligendi veniam doloribus, voluptas incidunt quam tempore nobis magnam accusamus facere ad dignissimos quidem error repudiandae asperiores illum?</li>
    </ul>
  </Hero>
)
