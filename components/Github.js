import styled from 'styled-components'

const Container = styled.div`
  display:inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-top:1em;
  @media only screen and (max-width: 740px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
  }
`
const GithubItem = styled.a`
  text-decoration:none;
  display:flex;
  background:${({ theme }) => theme.body_100};
  border-radius:10px;
  border:2px solid ${({ theme }) => theme.body_200};

  transition: all .4s;
  &:hover{
    background:${({ theme }) => theme.body_100};
    transform: translateY(-10px);
  }
  
  img{
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    margin-right:1em;
    object-position:center;
    object-fit:cover;
  }
  
  div{
    padding:1em;
    h3{
      margin:0.5em 0;
    }
    .description{
      font-size:15px;
      line-height:1.4em;
    }
  }

  @media only screen and (max-width: 740px) {
      img{
        width:140px;
      }
      div{
        padding:0.5em 0.8em 1em 0.8em;
      }
  }
`
const PrimaryLanguage = styled.div`
  display:inline-flex;
  justify-content:center;
  align-items:center;
  height:20px;
  border-radius:5px;
  margin-top:1em;
  background:${({ theme }) => theme.body_200};

  div{
    padding:0;
    width:18px;
    height:18px;
    border-radius:50%;
    background:${props => props.bgColor};
    margin-right:0.5em;
  }

  p{
    font-size:13px;
    font-weight:bold; 
  }
`


const Github = ({ repos }) => {
  return (
    <Container>
      {repos.map(item =>
        <GithubItem target="_blank" href={item.node.url}>
          <img width="180" src={item.node.openGraphImageUrl} />
          <div>
            <h3>{item.node.name}</h3>
            <p className="description">{item.node.shortDescriptionHTML}</p>

            <PrimaryLanguage>
              <div style={{ background: item.node.primaryLanguage.color }} />
              <p>{item.node.primaryLanguage.name}</p>
            </PrimaryLanguage>
          </div>
        </GithubItem>
      )}
    </Container>
  );
}

export default Github