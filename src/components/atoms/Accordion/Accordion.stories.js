import React from 'react'

import { Accordion, AccordionGroup } from 'components/atoms/Accordion'
import useToggle from 'hooks/useToggle'

export default {
  title: 'Components/Accordion',
  component: Accordion
}

export const usage = () => (
  <>
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
  </>
)

export const controlled = () => {
  const [open, toggle] = useToggle()

  return (
    <Accordion open={open} onChange={toggle} title="Como eu renovo a minha CNH?">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, tempore repudiandae, libero dicta nobis rerum inventore placeat veniam eos qui nulla iure tenetur vel beatae</p>
    </Accordion>
  )
}

export const withGroup = () => (
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
)
