import { Overlay } from 'react-portal-overlay';
import { i18n } from '../i18n'
import styled from 'styled-components'
import { withTranslation } from '../i18n'

const Container = styled.div`
  position:absolute;
  top:5.5em;
  left:0;
  right:0;
  width:100%;
  height:100%;
  z-index:3;

  transition: all .4s;

  background:${({ theme }) => theme.body};
  opacity:${(props) => props.open ? 1 : 0};
  visibility:${(props) => props.open ? "initial" : "hidden"};

  @media only screen and (max-width: 1280px) {
      top: 7em;
  }
`

const Title = styled.h1`
  font-weight:800;
  text-align:center;

  a{
    color:${({ theme }) => theme.body_600};
    text-decoration:none;
    transition: color .4s;
    &:hover{
      color:${({ theme }) => theme.body_800};
    }
    &:focus {
      box-shadow:initial;
    }
  }

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

const CustomModal = (props) => {
  const { t, theme, open, setOpen, title, children } = props
  const URL = i18n.language === "tr" ? "MelihCaliskan_Ozgecmis.pdf" : "MelihCaliskan_Resume.pdf"
  return (
    <Container open={open}>
      <Title><a target="_blank" href={URL}>{t('resume')}</a></Title>
      <Title><a href="mailto:mlhclskn@gmail.com">{t('contact')}</a></Title>
    </Container>
  )
}

CustomModal.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(CustomModal)