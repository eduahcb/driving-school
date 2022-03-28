import React from 'react'
import styled from 'styled-components'

import Card, { CardBody, CardImage } from 'components/atoms/Card'
import Heading from 'components/atoms/Heading'
import Button from 'components/atoms/Button'
import Section from 'components/molecules/Section'

import Image from 'stories/assets/bg-car.jpg'

const Title = styled.h6`
  margin-top: 0;
`

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardBody, CardImage }
}

export const usage = ({ title }) => (
  <Section inverse>
    <Card>
      <Card.Body>
        <Heading>
          <Title>{ title }</Title>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reprehenderit alias iusto magni nemo iure repudiandae, recusandae, excepturi provident</p>
        <div>
          <Button variant={Button.variants.link} color={Button.colors.primary}>saiba mais</Button>
        </div>
      </Card.Body>
    </Card>
  </Section>
)

usage.args = {
  title: 'Título'
}

export const withImage = ({ title }) => (
   <Section inverse>
    <Card>
      <Card.Image image={Image} />
      <Card.Body>
        <Heading>
          <Title>{ title }</Title>
        </Heading>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem reprehenderit alias iusto magni nemo iure repudiandae, recusandae, excepturi provident</p>
        <div>
          <Button variant={Button.variants.link} color={Button.colors.primary}>saiba mais</Button>
        </div>
      </Card.Body>
    </Card>
  </Section>
)

withImage.args = {
  title: 'Título'
}
