import styled from 'styled-components'

const Container = styled.div`
    max-width:960px;
    margin:5vh auto;
    line-height:65px;


    @media only screen and (max-width: 1280px) {
        & {
            line-height:60px;
        }
    }

    @media only screen and (max-width: 960px) {        
        & {
            margin:3vh auto;
            padding:0 2em;
        }
    }

    @media only screen and (max-height: 770px) {
        & {
            margin:5vh auto;
        }
    }

    @media only screen and (max-width: 740px) {        
        & {
            line-height:40px;
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