import React from 'react'
import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'

import { Accordion } from 'components/atoms/Accordion'

describe('Accordion', () => {
  const title = 'My Title'

  describe('when is not controller', () => {
    test('renders with title', () => {
      render(<Accordion title={title}><p>content</p></Accordion>)

      expect(screen.getByText('My Title')).toBeInTheDocument()
    })

    test('renders with content not open', () => {
      render(<Accordion title={title}><p>content</p></Accordion>)

      expect(screen.queryByText('content')).not.toBeInTheDocument()
    })

    test('triggers onChange when it is clicked (not controlled)', () => {
      render(<Accordion title={title}><p>content</p></Accordion>)

      expect(screen.queryByText('content')).not.toBeInTheDocument()

      const header = screen.getByText('My Title')

      userEvent.click(header)

      expect(screen.queryByText('content')).toBeInTheDocument()
    })
  })

  describe('when is controlled', () => {
    test('renders with content not open', () => {
      render(<Accordion open={false} title={title}><p>content</p></Accordion>)

      expect(screen.queryByText('content')).not.toBeInTheDocument()
    })

    test('renders with content open', () => {
      render(<Accordion open title={title}><p>content</p></Accordion>)

      expect(screen.getByText('content')).toBeInTheDocument()
    })

    test('trigger onChange when it is clicked (controlled)', () => {
      const onChange = jest.fn()

      render(<Accordion open={false} onChange={onChange} title={title}><p>content</p></Accordion>)

      expect(screen.queryByText('content')).not.toBeInTheDocument()

      const header = screen.getByText('My Title')

      userEvent.click(header)

      expect(onChange).toHaveBeenCalled()
    })
  })
})
