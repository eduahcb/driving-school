import React from 'react'
import styled from 'styled-components'
import { FaIdCard, FaHome, FaScroll } from 'react-icons/fa'

import Heading from 'components/atoms/Heading'
import Callout from 'components/atoms/Callout'
import Button from 'components/atoms/Button'
import Hero from 'components/molecules/Hero'
import Section from 'components/molecules/Section'
import Footer from 'components/organisms/Footer'

import HeroImage from 'assets/hero.jpg'
import SpeedSVG from 'draws/Speed'

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`

const ProductDetails = () => {
  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Nome do Serviço</h1>
        </Heading>
      </Hero>
      <Section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at optio iusto eos earum eligendi quo libero aut perspiciatis, magni odio repellendus dignissimos commodi neque iure! Inventore eaque quod nulla.</p>
        <p>Excepturi non iure fuga exercitationem dignissimos quisquam delectus dolores molestiae molestias? Molestiae architecto ab quod quam aliquid vero culpa quo enim nisi sunt, veniam ducimus nesciunt repellat neque voluptatum dicta.</p>
        <p>Repellat voluptates earum facere id perspiciatis maxime veritatis dolor cum reiciendis impedit iure similique magni, dolorem culpa itaque, animi corporis! Impedit modi sequi harum debitis qui a corrupti alias doloremque!</p>
        <h5>Documentos necessários</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll/>
            Certificado de nascimento ou casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <Callout.Body>
            <h6>Faça a sua matrícula agora mesmo</h6>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis qui rem excepturi modi, repudiandae dolorem iste, deleniti molestiae suscipit sit quisquam! Alias eos, vero dicta non rerum iusto velit veniam.</p>
            <Callout.Actions>
              <Button color={Button.colors.primary}>Matricular</Button>
            </Callout.Actions>
          </Callout.Body>
          <Callout.Image>
            <SpeedSVG />
          </Callout.Image>
        </Callout>
      </Section>
      <Footer />
    </>
  )
}

ProductDetails.defaultProps = {}

ProductDetails.propTypes = {}

export default ProductDetails
