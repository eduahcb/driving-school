import React from 'react'
import { render, screen } from 'test-utils'
import { userEvent } from '@storybook/testing-library'

import { Accordion, AccordionGroup } from 'components/atoms/Accordion'

describe('AccordionGroup', () => {
  const renderGroup = (number) => {
    const accordions = []

    for (let i = 0; i < number; i++) {
      accordions.push(<Accordion key={i} title={`Title ${i}`}><p>content {i}</p></Accordion>)
    }

    render(
      <AccordionGroup>
        { accordions.map(accordion => accordion)}
      </AccordionGroup>
    )
  }

  test('renders with one child', () => {
    render(
      <AccordionGroup>
        <Accordion title='My Title'><p>content</p></Accordion>
      </AccordionGroup>
    )

    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  test('renders with 3 child', () => {
    render(
      <AccordionGroup>
        <Accordion title='My Title'><p>content</p></Accordion>
        <Accordion title='My Title'><p>content</p></Accordion>
        <Accordion title='My Title'><p>content</p></Accordion>
      </AccordionGroup>
    )

    expect(screen.getAllByText('My Title')).toHaveLength(3)
  })

  test('renders with all accordions closed', () => {
    renderGroup(3)

    expect(screen.getByText('Title 0')).toBeInTheDocument()
    expect(screen.getByText('Title 1')).toBeInTheDocument()
    expect(screen.getByText('Title 0')).toBeInTheDocument()

    expect(screen.queryByText('content 0')).not.toBeInTheDocument()
    expect(screen.queryByText('content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('content 2')).not.toBeInTheDocument()
  })

  test('opens accordion with click', () => {
    renderGroup(3)

    expect(screen.queryByText('content 0')).not.toBeInTheDocument()
    expect(screen.queryByText('content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('content 2')).not.toBeInTheDocument()

    const header = screen.getByText('Title 0')

    userEvent.click(header)

    expect(screen.getByText('content 0')).toBeInTheDocument()
  })

  test('closes accordion when it clicks on it', () => {
    renderGroup(3)

    expect(screen.queryByText('content 0')).not.toBeInTheDocument()
    expect(screen.queryByText('content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('content 2')).not.toBeInTheDocument()

    const header = screen.getByText('Title 0')

    userEvent.click(header)

    expect(screen.getByText('content 0')).toBeInTheDocument()

    userEvent.click(header)

    expect(screen.queryByText('content 0')).not.toBeInTheDocument()
    expect(screen.queryByText('content 1')).not.toBeInTheDocument()
    expect(screen.queryByText('content 2')).not.toBeInTheDocument()
  })
})
