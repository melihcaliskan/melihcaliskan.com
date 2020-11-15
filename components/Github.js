import styled from 'styled-components'

const Container = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  overflow:hidden;
  /* For animation*/
  padding-top:20px;
  
  @media only screen and (max-width: 740px) {
    display:grid;
    grid-template-columns: 100%;
    grid-column-gap: 0px;
  }
`
const GithubItem = styled.a`
  text-decoration:none;
  display:flex;
  background:${({ theme }) => theme.body_100};
  border-radius:10px;
  border:2px solid ${({ theme }) => theme.body_200};

  max-height:220px;
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
  
  .content{
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
      max-height:120px;
      img{
        width:140px;
      }
      .content{
        padding:0.5em 0.8em 1em 0.8em;
      }
      .description{
        display:none;
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
  padding:1em 0.5em;
  background:${({ theme }) => theme.body_200};

  div{
    width:18px;
    height:18px;
    border-radius:50%;
    background:${props => props.bgColor};
    margin-right:0.5em;
  }

  p{
    padding:0;
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
          <div className="content">
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