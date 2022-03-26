import React from 'react'

import { FaCar, FaKey, FaMap, FaAccessibleIcon } from 'react-icons/fa'

import Hero from 'components/molecules/Hero'
import Heading from 'components/atoms/Heading'
import Button from 'components/atoms/Button'
import Grid from 'components/atoms/Grid'
import Feature from 'components/atoms/Feature'
import Section from 'components/molecules/Section'

import HeroImage from 'assets/hero.jpg'

const Home = () => {
  return (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Ganhe a sua <strong>liberdade</strong> <br /> para ir e vir</h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Et doloremque nesciunt sint animi placeat molestiae suscipit.</li>
        <li>Nemo similique adipisci inventore voluptatum at. Dolorem ullam</li>
      </ul>
      <Button variant={Button.variants.outlined} color={Button.colors.primary} onClick={ () => {}} >Matricula-se agora</Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </Feature>

        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </Feature>

        <Feature icon={<FaMap />} title="Excelente localização">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </Feature>

        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
        </Feature>
      </Grid>
    </Section>
  </>
  )
}

export default Home
