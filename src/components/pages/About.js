import React from 'react'
import styled from 'styled-components'

import Heading from 'components/atoms/Heading'
import Grid from 'components/atoms/Grid'
import Card from 'components/atoms/Card'
import Hero from 'components/molecules/Hero'
import Section from 'components/molecules/Section'
import Footer from 'components/organisms/Footer'

import HeroImage from 'assets/hero.jpg'
import InstImage1 from 'assets/instructors/inst1.jpg'
import InstImage2 from 'assets/instructors/inst2.jpg'
import InstImage3 from 'assets/instructors/inst3.jpg'
import InstImage4 from 'assets/instructors/inst4.jpg'
import InstImage5 from 'assets/instructors/inst5.jpg'
import InstImage6 from 'assets/instructors/inst6.jpg'
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
  const instructors = [
    { id: 1, name: 'Thor', avatar: InstImage1 },
    { id: 2, name: 'Mel', avatar: InstImage2 },
    { id: 3, name: 'Bolinha', avatar: InstImage3 },
    { id: 4, name: 'Mike', avatar: InstImage4 },
    { id: 5, name: 'Emmy', avatar: InstImage5 },
    { id: 6, name: 'Bob', avatar: InstImage6 }
  ]

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
        <Grid sm={2} md={3} lg={4}>
          {
            instructors.map((instructor) => (
              <Card key={instructor.id}>
                <Card.Image image={instructor.avatar}>
                  <Card.ImageDescription>
                    <h5>{instructor.name}</h5>
                  </Card.ImageDescription>
                </Card.Image>
              </Card>
            ))
          }
        </Grid>
      </Section>
      <Footer />
    </>
  )
}

export default About
