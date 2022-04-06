import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import Button from 'components/atoms/Button'

export default {
  title: 'Components/Button',
  component: Button
}

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`

const ButtonWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button onClick={action('clicked')} {...props} >Default</Button>
      <Button onClick={action('clicked')} color="primary" {...props}>Primary</Button>
      <Button onClick={action('clicked')} color="danger" {...props}>Danger</Button>
    </Toolbar>
    <p>As a link</p>
    <Toolbar>
      <Button as="a" href="#" onClick={action('clicked')} {...props} >Default</Button>
      <Button as="a" href="#" onClick={action('clicked')} color="primary" {...props}>Primary</Button>
      <Button as="a" href="#" onClick={action('clicked')} color="danger" {...props}>Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled onClick={action('clicked')} {...props} >Default</Button>
      <Button disabled onClick={action('clicked')} color="primary" {...props} >Primary</Button>
      <Button disabled onClick={action('clicked')} color="danger" {...props} >Danger</Button>
    </Toolbar>
  </div>
)

export const usage = () => (
  <ButtonWrapper />
)

export const outlined = () => (
  <ButtonWrapper variant="outlined" />
)

export const link = () => (
  <ButtonWrapper variant="link" />
)
