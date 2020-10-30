import styled from 'styled-components'

const Text = styled.a`
  position: relative;
  display: inline;
  font-size:58px;
  font-weight:700;    
  color:${props => props.highlight ? props.theme.body_700 : props.color ? props.color : props.theme.body_600};
  cursor:${props => props.pointer ? "pointer" : "initial"};

  &:hover{
    color:${props => props.href && props.theme.body_900}
  }

  text-decoration:${props => props.underline ? "underline" : "none"};
  text-decoration-style: ${props => props.underline && "dotted"};

  transition: all 0.3s;

  .dpu:hover{
    .dpu-card{
      visibility: visible;
      opacity:1
    }
  }

  .dpu-card{
    visibility: hidden;
    opacity:0;
    position: absolute;
    z-index: 1;
    top: 1.2em;
    left: 50%;
    margin-left: -20%;
    transition: opacity 0.3s;

    img {
      width:280px;
      border-radius:10px;
      box-shadow: 0px 6px 9px -2px rgba(0,0,0,0.75);
    }
  }

  @media only screen and (max-width: 1280px) {
      .dpu-card img{
        width:240px;
      }
      
      & {
          font-size:2.5rem;
      }
  }

  @media only screen and (max-width: 740px) {
      .dpu-card img{
        width:200px;
      }

      & {
          font-size:1.8rem;
      }
  }
`

const CustomText = (props) => {
  const { children } = props
  return (
    <Text {...props}>
      {children}
    </Text>
  );
}

export default CustomText