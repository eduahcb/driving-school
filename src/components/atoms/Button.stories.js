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

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button onClick={action('clicked')}>Default</Button>
      <Button onClick={action('clicked')} color="primary">Primary</Button>
      <Button onClick={action('clicked')} color="danger">Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled onClick={action('clicked')}>Default</Button>
      <Button disabled onClick={action('clicked')} color="primary">Primary</Button>
      <Button disabled onClick={action('clicked')} color="danger">Danger</Button>
    </Toolbar>
  </div>
)

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="outlined" onClick={action('clicked')}>Default</Button>
      <Button variant="outlined" onClick={action('clicked')} color="primary">Primary</Button>
      <Button variant="outlined" onClick={action('clicked')} color="danger">Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="outlined" disabled onClick={action('clicked')}>Default</Button>
      <Button variant="outlined"disabled onClick={action('clicked')} color="primary">Primary</Button>
      <Button variant='outlined' disabled onClick={action('clicked')} color="danger">Danger</Button>
    </Toolbar>
  </div>
)

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="link" onClick={action('clicked')}>Default</Button>
      <Button variant="link" onClick={action('clicked')} color="primary">Primary</Button>
      <Button variant="link" onClick={action('clicked')} color="danger">Danger</Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="link" disabled onClick={action('clicked')}>Default</Button>
      <Button variant="link"disabled onClick={action('clicked')} color="primary">Primary</Button>
      <Button variant='link' disabled onClick={action('clicked')} color="danger">Danger</Button>
    </Toolbar>
  </div>
)
