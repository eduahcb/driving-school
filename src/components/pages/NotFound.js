import React from 'react'
import styled from 'styled-components'

import Heading from 'components/atoms/Heading'
import Grid from 'components/atoms/Grid'
import Section from 'components/molecules/Section'

import NotFoundSVG from 'draws/NotFound'

const Title = styled.h1`
  margin-top: 0;
`

const ImageContainer = styled.div`
  text-align: right;
  
  svg {
    width: 100%;
    max-width: 250px;
    height: auto;
    color: ${props => props.theme.colors.primary.main}
  }
`

const NotFound = () => {
  return (
    <Section>
      <Grid sm={2}>
        <div>
          <Heading>
            <Title>Página não encontrada</Title>
          </Heading>
        </div>
        <div>
          <ImageContainer>
            <NotFoundSVG />
          </ImageContainer>
        </div>
      </Grid>
    </Section>
  )
}

export default NotFound
