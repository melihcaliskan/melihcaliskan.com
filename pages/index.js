import { i18n, withTranslation } from '../i18n'
import { useCallback, useEffect, useRef, useState } from 'react';

import Container from '../components/Container'
import Head from 'next/head'
import Modal from '../components/Modal'
import Text from '../components/Text'
import ThemeToggle from '../components/ThemeToggle';
import Twemoji from '../components/Twemoji';
import handleLanguage from '../helpers/handleLanguage'
import styled from 'styled-components'

const LanguageToggle = styled.button`
  cursor: pointer;
  border:0;
  margin-left:-5px;
  margin-right:-5px;
  background:transparent;
  font-weight:700;
  transition: color .3s;
  color:${({ theme }) => theme.body_600};
  &:hover, &:focus{
    color:${({ theme }) => theme.body_700};
  }
`

const Turkish = ({ t, theme, setOpenStartups, setOpenProjects }) => {
  
  const handleAudio = (play) => {
    const audio = document.getElementById("dpu-sound")
    if (play) {
      audio.play()
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  return (
    <Text>{t('iam')}
      <Text pointer target="_blank" href="/MelihCaliskan_Ozgecmis.pdf" color={theme.body_700}>{' ' + t('name')}.</Text>
      <Text
        // Used onClick because of Apple restrictions
        onClick={() => handleAudio(true)}
        onMouseLeave={() => handleAudio(false)}
        pointer
        className="dpu"
      >
        {' ' + t('university')}
        <div className="dpu-card">
          <audio id="dpu-sound">
            <source src="/dpu.mp3" type="audio/mpeg" />
          </audio>
          <img width="280" src="/dpu.jpg" />
        </div>
      </Text>
      <Text color={theme.body_700}>{' ' + t('faculty')}</Text>
      <Text>{' ' + t('student')}.</Text>
      <Text>{' ' + t('myown') + ' '}</Text>
      <Text href="#" onClick={() => setOpenStartups(true)} pointer underline color={theme.body_700}>{t('startup')}</Text>
      <Text>{' ' + t('workon') + ' '}</Text>
      <Text href="#" onClick={() => setOpenProjects(true)} pointer underline color={theme.body_700}>{t('freelance')}</Text>
      <Text>{' ' + t('projects')}</Text>
    </Text >
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

  if (loading) {
    return (
      <div style={{ position: "absolute", top: "50%", left: "50%", marginRight: "-50%", transform: "translate(-50%, -50%)", animation: "fadeIn ease .2s", WebkitAnimation: "fadeIn ease .2s", MozAnimation: "fadeIn ease .2s" }}>
        <h1 style={{ fontSize: '36px', color: '#464646', fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 700 }}>Loading...</h1>
      </div>
    )
  }

  return (
    <Container>
      <ThemeToggle isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
      <Startups title={t('modalStartup')} open={openStartups} setOpen={setOpenStartups} {...props} />
      <Projects title={t('modalProject')} open={openProjects} setOpen={setOpenProjects} {...props} />

      <Text id="text-container">
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