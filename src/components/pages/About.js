import React from 'react'
import styled from 'styled-components'

import Heading from 'components/atoms/Heading'
import Grid from 'components/atoms/Grid'
import Hero from 'components/molecules/Hero'
import Section from 'components/molecules/Section'
import Footer from 'components/organisms/Footer'

import HeroImage from 'assets/hero.jpg'
import AboutSVG from 'draws/About'

const ImageContainer = styled.div`
  text-align: center;
  
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${props => props.theme.colors.primary.main}
  }
`

const About = () => {
  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Driving School</h1>
        </Heading>
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident eaque aliquam, consectetur obcaecati sunt adipisci, ea dolor error officia, enim porro? Exercitationem enim tenetur autem saepe vel, cum delectus.</p>
            <p>Blanditiis eveniet expedita numquam veniam laboriosam ipsam dignissimos? Magni ducimus nihil reiciendis itaque ullam. Eum praesentium ratione deleniti corporis voluptates dolores assumenda fuga, reiciendis laborum culpa, placeat dicta saepe facilis!</p>
            <p>Id expedita natus animi. Maiores, quasi a. Repellat, accusantium, tenetur aspernatur saepe soluta tempora alias reiciendis doloremque similique, aperiam voluptatem! Aliquam id optio aliquid quod ex aspernatur adipisci blanditiis odit?</p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus</li>
            </ul>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime repellendus porro debitis cumque atque adipisci pariatur temporibus? Veniam repellendus sunt distinctio possimus. Itaque incidunt, consequuntur iusto dolore repellendus esse?</p>
            <ImageContainer>
              <AboutSVG />
            </ImageContainer>
          </div>
        </Grid>
      </Section>
      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Missão</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis placeat dolorum hic nemo facere enim! Maiores cum impedit, fuga nulla exercitationem necessitatibus eum eos sequi sint autem nihil ad provident.</p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>Itaque fuga sint voluptas, non quisquam perspiciatis sunt nesciunt magnam laudantium eum, reiciendis natus tempore officia. In minima omnis dolore, optio deleniti ex maxime eum ut illum esse modi dolorum?</p>
          </div>
        </Grid>
      </Section>
      <Section>
        <Heading>
          <h2>Conheça nossos professores</h2>
        </Heading>
      </Section>
      <Footer />
    </>
  )
}

export default About
