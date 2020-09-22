import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0 0 1em;
`

const Title = styled.h3`
`

const HackerrankContainer = styled.div`
  display:inline-grid;
  grid-template-columns: repeat(5,1fr);
  grid-row-gap: 10px;

  &:first-of-type {
      margin-bottom:2em;
  }
  @media only screen and (max-width: 740px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const HackerrankItem = styled.img`
  width:96px;
  margin-right:1em;
  @media only screen and (max-width: 740px) {
    width:72px;
  }
`

const Hackerrank = ({ t, data }) => {
    return (
        <Container>
            <Title>{t('certificates')}</Title>
            <HackerrankContainer>
                {data["certs"].map(item =>
                    <HackerrankItem
                        width={32}
                        draggable="false"
                        src={item.photo}
                    />
                )}
            </HackerrankContainer>

            <Title>{t('badges')}</Title>
            <HackerrankContainer>
                {data["badges"].map(item =>
                    <HackerrankItem
                        width={32}
                        draggable="false"
                        src={item.photo}
                    />
                )}
            </HackerrankContainer>
        </Container>
    );
}

export default Hackerrank