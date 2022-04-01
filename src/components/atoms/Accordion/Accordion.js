import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import useToggle from 'hooks/useToggle'

const Root = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${props => props.theme.colors.primary.main};
  background-color: #fff;
  cursor: pointer;

  ${props => props.open && css`
    margin: 16px 0;
  `}

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  & h6 {
    margin: 0;
    flex: 1
  }

  & svg {
    font-size: 1.25rem;
  }
`

const Body = styled.div`
  padding: 0 16px 16px 16px;
`

const Accordion = ({ children, title, open: propOpen, onChange }) => {
  const [stateOpen, toggle] = useToggle()

  const isControlled = propOpen !== undefined
  const open = isControlled ? propOpen : stateOpen

  const handleClick = () => {
    if (isControlled) return onChange()

    toggle()
  }

  return (
    <Root open={open}>
      <Head role="button" onClick={handleClick} >
        <h6>{ title }</h6>
        { open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      { open && <Body>{ children } </Body> }
    </Root>
  )
}

Accordion.defaultProps = {
  title: '',
  open: undefined,
  onChange: undefined
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  open: PropTypes.bool,
  onChange: PropTypes.func
}

export default Accordion
