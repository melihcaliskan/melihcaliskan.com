import styled from 'styled-components'

const Text = styled.h1`
    display: inline;
        
    color:${props => props.color ? props.color : props.theme.body_600};
    
    text-decoration:${props => props.underline && "underline"};
    text-decoration-style: ${props => props.underline && "dotted"};

    @media only screen and (max-width: 1280px) {
        & {
            font-size:2.8rem;
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