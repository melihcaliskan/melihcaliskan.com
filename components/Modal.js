import { Overlay } from 'react-portal-overlay';
import styled from 'styled-components'
import { withTranslation } from '../i18n'

const Modal = styled.div`
  max-width:960px;
  margin:8vh auto;
  @media only screen and (max-width: 740px) {
    margin:0 auto;
  }
`

const Content = styled.div`
  margin:3em 0;
`

const Title = styled.h1`
  font-weight:800;
  @media only screen and (max-width: 740px) {
    margin:0;
    font-size:2.5rem;
  }
`

const CloseModal = styled.div`
  cursor: pointer;
  display:flex;
  align-items:center;

  p{
    color:${({ theme }) => theme.body_700};
    font-size:24px;
    transition: color .3s;
    &:hover, &:focus{
      color:${({ theme }) => theme.body_900};
    }
  }

  .svg-container{
    transition: background-color .3s;
    display:flex;
    justify-content:center;
    align-items:center;
    
    width:48px;
    height:48px;
    margin-right:1em;
    background:${({ theme }) => theme.body_100};
    border-radius:50%;

    &:hover, &:focus{
      background:${({ theme }) => theme.body_200};
    }
  }

  .svg-container > svg{
    width:36px;
    fill:${({ theme }) => theme.body_700};
  }

  @media only screen and (max-width: 740px) {
    p{
      font-size:18px;
    }
    .svg-container{
      width:36px;
      height:36px;
    }
    .svg-container > svg {
      width:24px;
    }
  }
`

const CustomModal = (props) => {
  const { t, theme, open, setOpen, title, children } = props
  return (
    <Overlay
      open={open}
      css={css`
        background: ${theme.body};
        padding: 3rem;
        width: 100%;
        overflow:auto !important;
      `}>
      <Modal>
        <Title>
          {title}
        </Title>

        <Content>
          <p>
            {children}
          </p>
        </Content>

        <CloseModal onClick={() => setOpen(false)}>
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 19.9375 12.96875 C 19.414063 12.988281 18.921875 13.214844 18.5625 13.59375 L 8.6875 23.59375 L 7.3125 25 L 8.6875 26.40625 L 18.5625 36.40625 C 19.339844 37.199219 20.613281 37.214844 21.40625 36.4375 C 22.199219 35.660156 22.214844 34.386719 21.4375 33.59375 L 14.90625 27 L 40 27 C 40.722656 27.011719 41.390625 26.632813 41.753906 26.007813 C 42.121094 25.386719 42.121094 24.613281 41.753906 23.992188 C 41.390625 23.367188 40.722656 22.988281 40 23 L 14.90625 23 L 21.4375 16.40625 C 22.039063 15.824219 22.21875 14.933594 21.882813 14.164063 C 21.546875 13.398438 20.773438 12.921875 19.9375 12.96875 Z"></path></svg>
          </div>
          <p>{t('backToHome')}</p>
        </CloseModal>
      </Modal>
    </Overlay>
  )
}

CustomModal.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(CustomModal)