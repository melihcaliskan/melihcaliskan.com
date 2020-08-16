import { Link, i18n, withTranslation } from '../i18n'
import { useCallback, useEffect, useRef, useState } from 'react';

import Container from '../components/Container'
import Head from 'next/head'
import { Overlay } from 'react-portal-overlay';
import Text from '../components/Text'
import ThemeToggle from '../components/ThemeToggle';
import Twemoji from '../components/Twemoji';
import handleLanguage from '../helpers/handleLanguage'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const LanguageToggle = styled.button`
  cursor: pointer;
  border:0;
  margin-left:-5px;
  background:transparent;
  font-weight:700;
  transition: color .3s;
  color:${({ theme }) => theme.body_600};
  &:hover, &:focus{
    color:${({ theme }) => theme.body_700};
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
`

const Turkish = ({ t, theme, setOpenStartups, setOpenProjects }) => {
  return (
    <Text>{t('iam')} <Text pointer target="_blank" href="/MelihCaliskan_Ozgecmis.pdf" color={theme.body_700}>{t('name')}.</Text> {t('university')} <Text color={theme.body_700}>{t('faculty')}</Text> {t('student')}.
      {' ' + t('myown')} <Text href="#" onClick={() => setOpenStartups(true)} pointer underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text href="#" onClick={() => setOpenProjects(true)} pointer underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}

const English = ({ t, theme, setOpenStartups, setOpenProjects }) => {
  return (
    <Text>{t('iam')} <Text pointer target="_blank" href="MelihCaliskan_Resume.pdf" color={theme.body_700}>{t('name')}.
      <br />
      {t('student')} </Text> {t('university')}, <Text color={theme.body_700}>{t('faculty')}</Text>.
      {' ' + t('myown')} <Text href="#" onClick={() => setOpenStartups(true)} pointer underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text href="#" onClick={() => setOpenProjects(true)} pointer underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}
const Deutsch = ({ t, theme, setOpenStartups, setOpenProjects }) => {
  return (
    <Text>{t('iam')} <Text pointer target="_blank" href="MelihCaliskan_Resume.pdf" color={theme.body_700}>{t('name')}.</Text>
      <br />
      <Text>{t('student')}</Text> {t('university')}, <Text color={theme.body_700}>{t('faculty')}</Text>.
      {' ' + t('myown')} <Text href="#" onClick={() => setOpenStartups(true)} pointer underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text href="#" onClick={() => setOpenProjects(true)} pointer underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}

const Modal = (props) => {
  const { t, theme, open, setOpen, title, children } = props
  return (
    <Overlay
      css={css`background: ${theme.body}; padding: 3rem; width: 100%;`}
      open={open}>

      <Container>
        <h1 css={css`margin-bottom: 2rem;`}>
          {title}
        </h1>

        <p>
          {children}
        </p>
        <CloseModal onClick={() => setOpen(false)}>
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 19.9375 12.96875 C 19.414063 12.988281 18.921875 13.214844 18.5625 13.59375 L 8.6875 23.59375 L 7.3125 25 L 8.6875 26.40625 L 18.5625 36.40625 C 19.339844 37.199219 20.613281 37.214844 21.40625 36.4375 C 22.199219 35.660156 22.214844 34.386719 21.4375 33.59375 L 14.90625 27 L 40 27 C 40.722656 27.011719 41.390625 26.632813 41.753906 26.007813 C 42.121094 25.386719 42.121094 24.613281 41.753906 23.992188 C 41.390625 23.367188 40.722656 22.988281 40 23 L 14.90625 23 L 21.4375 16.40625 C 22.039063 15.824219 22.21875 14.933594 21.882813 14.164063 C 21.546875 13.398438 20.773438 12.921875 19.9375 12.96875 Z"></path></svg>
          </div>
          <p>Back to home</p>
        </CloseModal>
      </Container>
    </Overlay>
  )
}

const Startups = (props) => {
  const { t, theme, open, setOpen, title, children } = props
  return (
    <Modal {...props}>
      Coming soon...
    </Modal>
  )
}
const Projects = (props) => {
  const { t, theme, open, setOpen, title, children } = props
  return (
    <Modal {...props}>
      Coming soon...
    </Modal>
  )
}

const Home = (props) => {
  const { loading, t, isLight, theme, toggleTheme } = props
  const language = i18n.language
  const [openStartups, setOpenStartups] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  const handleLoad = () => {
    // WIP
    const text = "loading"
    for (let i = 0; text.length >= i; i++) {
      setTimeout(() => {
        window.history.replaceState(null, null, `/${text.substr(i)}`);
        //console.log(text.substr(i))
      }, 300)
    }
  }

  if (loading) {
    return (
      <div style={{ color: '#464646', fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 700, position: "absolute", top: "50%", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)", animation: "fadeIn ease .2s", WebkitAnimation: "fadeIn ease .2s", MozAnimation: "fadeIn ease .2s" }}><h1>Loading...</h1></div>
    )
  }

  return (
    <Container>
      <ThemeToggle isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
      <Startups title={t('modalStartup')} open={openStartups} setOpen={setOpenStartups} {...props} />
      <Projects title={t('modalProject')} open={openProjects} setOpen={setOpenProjects} {...props} />

      <Text>
        <LanguageToggle
          title={"Change language"}
          type='button'
          onClick={() => handleLanguage()}>
          {t('hello')}
        </LanguageToggle>
        {", "}
        {language == "tr" ?
          <Turkish
            setOpenStartups={setOpenStartups}
            setOpenProjects={setOpenProjects}
            {...props} />
          :
          language == "en" ?
            <English
              setOpenStartups={setOpenStartups}
              setOpenProjects={setOpenProjects}
              {...props} />
            :
            language == "de" &&
            <Deutsch
              setOpenStartups={setOpenStartups}
              setOpenProjects={setOpenProjects}
              {...props} />
        }
      </Text>
    </Container>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)