import React from 'react'

import { FaCar, FaKey, FaMap, FaAccessibleIcon } from 'react-icons/fa'

import Hero from 'components/molecules/Hero'
import Heading from 'components/atoms/Heading'
import Button from 'components/atoms/Button'
import Grid from 'components/atoms/Grid'
import Feature from 'components/atoms/Feature'
import Section from 'components/molecules/Section'
import Footer from 'components/organisms/Footer'
import ProductGrid from 'components/organisms/ProductGrid'

import HeroImage from 'assets/hero.jpg'
import AboutVideo from 'assets/about.mp4'
import ServImage01 from 'assets/serv-01.jpg'
import ServImage02 from 'assets/serv-02.jpg'
import ServImage03 from 'assets/serv-03.jpg'
import ServImage04 from 'assets/serv-04.jpg'
import ServImage05 from 'assets/serv-05.jpg'

const Home = () => {
  const products = [
    {
      id: 1,
      title: '1ª Habilitação Carro e Moto',
      slang: 'primeira-habilitacao-carro-e-moto',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: ServImage01
    },
    {
      id: 2,
      title: '1ª Habilitação Carro',
      slang: 'primeira-habilitacao-carro',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: ServImage02
    },
    {
      id: 3,
      title: '1ª Habilitação Moto',
      slang: 'primeira-habilitacao-moto',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: ServImage03
    },
    {
      id: 4,
      title: 'Mudança de Categoria Caminhão',
      slang: 'mudanca-de-categoria-caminnhao',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: ServImage04
    },
    {
      id: 5,
      title: 'Aulas Avulsas',
      slang: 'aulas-avulsas',
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: ServImage05
    }
  ]

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
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Driving School</h2>
          </Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim expedita natus labore quaerat, inventore</p>
          <div>
            <Button color="primary" >Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
  )
}

export default Home
