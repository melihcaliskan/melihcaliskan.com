import styled from 'styled-components'

const Container = styled.div`
  display:inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-top:1em;
`
const GithubItem = styled.a`
  text-decoration:none;
  display:flex;
  background:${({ theme }) => theme.body_100};
  border-radius:10px;

  transition: all .4s;
  &:hover{
    background:${({ theme }) => theme.body_100};
    transform: translateY(-10px);
  }
  
  img{
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    margin-right:1em;
    object-position:left;
    object-fit:cover;
  }
  
  div{
    padding:1em;
    h3{
      margin:0.5em 0;
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
  background:${props => props.bgColor};

  p{
    font-size:13px;
    font-weight:bold; 
    color:${({ theme }) => theme.body_100}
  }
`


const CustomHeader = ({ repos }) => {
    return (
        <Container>
            {repos.map(item =>
                <GithubItem target="_blank" href={item.node.url}>
                    <img width="180" src={item.node.openGraphImageUrl} />
                    <div>
                        <h3>{item.node.name}</h3>
                        <p>{item.node.shortDescriptionHTML}</p>

                        <PrimaryLanguage bgColor={item.node.primaryLanguage.color}>
                            <p>{item.node.primaryLanguage.name}</p>
                        </PrimaryLanguage>
                    </div>
                </GithubItem>
            )}
        </Container>
    );
}

export default CustomHeader