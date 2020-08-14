import styled from 'styled-components'

const Container = styled.h1`
    max-width:960px;
    margin:15vh auto;

    @media only screen and (max-width: 960px) {        
        & {
            padding:0 2em;
        }
    }

    @media only screen and (max-width: 740px) {
        margin:5vh auto;

        & {
            padding:0 0.5em;
        }
    }
`

const CustomContainer = (props) => {
    const { children } = props
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}

export default CustomContainer