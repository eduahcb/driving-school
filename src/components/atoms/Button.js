import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getMainColor = ({ theme, color }) => {
  const selectedColor = {
    default: '#e0e0e0',
    primary: theme.colors.primary.main,
    danger: theme.colors.danger.main
  }[color]

  return selectedColor
}

const getDarkColor = ({ theme, color }) => {
  const selectedColor = {
    default: '#5a6268',
    primary: theme.colors.primary.dark,
    danger: theme.colors.danger.dark
  }[color]

  return selectedColor
}

const getTextColor = ({ theme, color }) => {
  const selectedText = {
    default: '#212121',
    primary: theme.colors.primary.text,
    danger: theme.colors.danger.text
  }[color]

  return selectedText
}

const getOutlinedText = (props) => {
  if (props.color === 'default') return '#212121'

  return getMainColor(props)
}

const getLinkText = (props) => {
  if (props.color === 'default') return '#757575'

  return getMainColor(props)
}

const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;

  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getTextColor};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`

const StyledButtonOutlined = styled(StyledButton)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:enabled {
    background-color: transparent ;
    color: ${getDarkColor}
  }
`

const StyledButtonLink = styled(StyledButton)`
  background-color: transparent;
  border-color: transparent;  
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`

const colors = {
  default: 'default',
  primary: 'primary',
  danger: 'danger'
}

const variants = {
  default: 'default',
  outlined: 'outlined',
  link: 'link'
}

const Button = ({ type, children, color, variant, onClick, disabled }) => {
  const buttonsTypes = [
      // eslint-disable-next-line react/jsx-key
      <StyledButton onClick={onClick} type={type} color={color} disabled={disabled} >{children}</StyledButton>,
      // eslint-disable-next-line react/jsx-key
      <StyledButtonOutlined onClick={onClick} type={type} color={color} disabled={disabled} >{children}</StyledButtonOutlined>,
      // eslint-disable-next-line react/jsx-key
      <StyledButtonLink onClick={onClick} type={type} color={color} disabled={disabled} >{children}</StyledButtonLink>
  ]

  const index = { default: 0, outlined: 1, link: 2 }[variant]

  return buttonsTypes[index]
}

Button.colors = colors

Button.variants = variants

Button.defaultProps = {
  type: 'button',
  children: undefined,
  color: 'default',
  variant: 'default',
  disabled: false,
  onClick: undefined
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node,
  color: PropTypes.oneOf([...Object.values(colors)]),
  variant: PropTypes.oneOf([...Object.values(variants)]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Button
