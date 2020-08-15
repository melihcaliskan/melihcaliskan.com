import styled from 'styled-components'

const Container = styled.div`
    max-width:960px;
    margin:8vh auto;
    line-height:60px;


    .svg-inline--fa{
        width:36px;
        height:36px;
    }

    @media only screen and (max-width: 1280px) {
        .svg-inline--fa{
            width:28px;
            height:28px;
        }
        & {
            line-height:60px;
        }
    }

    @media only screen and (max-width: 960px), (max-height: 770px) {   
        
        & {
            margin:3vh auto;
            padding:2em;
        }
    }
    
    @media only screen and (max-width: 740px) {  
        .svg-inline--fa{
            width:24px;
            height:24px;
        }      
        & {
            line-height:40px;
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