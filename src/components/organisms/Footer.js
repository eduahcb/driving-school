import React from 'react'
import styled from 'styled-components'

import { FaPhone, FaBuilding, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

import Container from 'components/atoms/Container'
import Grid from 'components/atoms/Grid'
import Heading from 'components/atoms/Heading'

const Root = styled.footer`
  background-color: #2a2a2a;
  padding: 40px 0;
  color: #fff;

  h6 {
    margin-top: 0;
    text-transform: uppercase;
  }
`

const IconContainer = styled.span`
  margin-right: 8px;
`

const FooterLink = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  color: ${props => props.theme.colors.primary.main};

  &:hover {
    color: ${props => props.theme.colors.primary.dark};
  }

`

const Footer = () => {
  const socialMediaLinks = () => {
    const socialMedias = [
      {
        id: 1,
        icon: <FaFacebook />,
        link: 'https://pt-br.facebook.com/',
        text: 'facebook'
      },
      {
        id: 2,
        icon: <FaLinkedin />,
        link: 'https://br.linkedin.com/',
        text: 'linkedin'
      },
      {
        id: 3,
        icon: <FaTwitter />,
        link: 'https://twitter.com/eduahcb',
        text: 'twitter'
      }
    ]

    return (
      <>
        { socialMedias.map(socialMedia => (
          <p key={socialMedia.id}>
                <FooterLink target="_blank" rel='noopener' href={socialMedia.link} >
                  <IconContainer>
                    {socialMedia.icon}
                  </IconContainer>
                  {socialMedia.text}
                </FooterLink>
              </p>
        ))}
      </>
    )
  }

  return (
    <Root>
      <Container>
        <Grid md={3}>
          <div>
            <Heading>
              <h6>Driving School</h6>
            </Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis aspernatur omnis pariatur quod? Animi molestiae, minima explicabo iusto autem est sit velit mollitia neque nihil iste sunt ipsa voluptatibus.</p>
          </div>
          <div>
            <Heading>
              <h6>Contatos</h6>
            </Heading>
            <p>
              <IconContainer>
                <FaPhone />
              </IconContainer>
              (16) 12345-6789
            </p>
            <p>
              <IconContainer>
                <FaBuilding />
              </IconContainer>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod repellendus eligendi totam, et placeat amet quibusdam asperiores consectetur alias doloribus rerum explicabo facere magnam fugiat officiis laborum culpa modi.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Redes Sociais</h6>
              {socialMediaLinks()}
            </Heading>
          </div>
        </Grid>
      </Container>
    </Root>
  )
}

export default Footer
