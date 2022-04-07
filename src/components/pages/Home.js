import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { FaCar, FaKey, FaMap, FaAccessibleIcon } from 'react-icons/fa'

import Hero from 'components/molecules/Hero'
import Heading from 'components/atoms/Heading'
import Button from 'components/atoms/Button'
import Grid from 'components/atoms/Grid'
import Feature from 'components/atoms/Feature'
import Section from 'components/molecules/Section'
import Footer from 'components/organisms/Footer'
import ProductGrid from 'components/organisms/ProductGrid'
import { Accordion, AccordionGroup } from 'components/atoms/Accordion'

import ProductType from 'models/types/ProductType'

import HeroImage from 'assets/hero.jpg'
import AboutVideo from 'assets/about.mp4'

const Home = ({ products }) => (
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
      <Button variant={Button.variants.outlined} color={Button.colors.primary}>Matricula-se agora</Button>
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
            <Button as={Link} to='/sobre' color="primary">saiba mais</Button>
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
      <AccordionGroup>
        <Accordion title="Como eu renovo a minha CNH?">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempore repudiandae, libero dicta nobis rerum inventore placeat veniam eos qui nulla iure tenetur vel beatae</p>
        </Accordion>
        <Accordion title="Como falo a mudança de categoria">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempore repudiandae, libero dicta nobis rerum inventore placeat veniam eos qui nulla iure tenetur vel beatae</p>
        </Accordion>
        <Accordion title="Fui multado e agora?">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempore repudiandae, libero dicta nobis rerum inventore placeat veniam eos qui nulla iure tenetur vel beatae</p>
        </Accordion>
        <Accordion title="Como eu renovo a minha CNH?">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempore repudiandae, libero dicta nobis rerum inventore placeat veniam eos qui nulla iure tenetur vel beatae</p>
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
)

Home.defaultProps = {
  products: []
}

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType)
}

export default Home
