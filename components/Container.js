import styled from 'styled-components'

const Container = styled.h1`
    max-width:960px;
    margin:3vh auto;
    background:${props => props.theme.body_100};
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