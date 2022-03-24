import styled from 'styled-components'

const Heading = styled.div`

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {

    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      background-color: ${props => props.theme.colors.primary.main};
      height: 5px;
      width: 70px;
    }
  }

  h1 {
    padding-bottom: 25px;
  }

  h2 {
    padding-bottom: 16px;
  }
`
export default Heading
