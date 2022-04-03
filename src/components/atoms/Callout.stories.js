import React from 'react'

import Callout, { CalloutBody, CalloutActions, CalloutImage } from 'components/atoms/Callout'
import Button from 'components/atoms/Button'

import SpeedSVG from 'draws/Speed'

export default {
  title: 'Components/Callout',
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutImage }
}

export const usage = () => (
  <>
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
  </>
)
