import styled from 'styled-components'

const Text = styled.a`
    display: inline;
    font-size:64px;
    font-weight:700;    
    color:${props => props.color ? props.color : props.theme.body_600};
    cursor:${props => props.pointer ? "pointer" : "initial"};

    text-decoration:${props => props.underline ? "underline" : "none"};
    text-decoration-style: ${props => props.underline && "dotted"};

    transition: all 0.3s;

    @media only screen and (max-width: 1280px) {
        & {
            font-size:2.5rem;
        }
    }

    @media only screen and (max-width: 740px) {
        & {
            font-size:2rem;
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