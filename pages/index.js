import { i18n, withTranslation } from '../i18n'

import Container from '../components/Container'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Projects from '../components/Projects'
import Startups from '../components/Startups'
import Text from '../components/Text'
import styled from 'styled-components'
import { useState } from 'react';
import { handleLanguage } from '../helpers/handleLanguage'

const LanguageToggle = styled.a`
  cursor: pointer;
  font-weight:700;
  color:${({ theme }) => theme.body_600};
  transition: color .4s;
  &:hover, &:focus{
    color:${({ theme }) => theme.body_700};
  }
`

const Turkish = ({ t, theme, setOpenStartups, setOpenProjects }) => {

  const handleAudio = (play) => {
    const audio = document.getElementById("dpu-sound")
    if (play) {
      document.title = "Teşekkürler Kalt ❤️"
      audio.play()
    } else {
      document.title = "Melih Çalışkan"
      audio.pause();
      audio.currentTime = 0;
    }
  }

  return (
    <Text>{t('iam')}
      <Text pointer target="_blank" href="/MelihCaliskan_Ozgecmis.pdf" highlight>{' ' + t('name')}.{"\n"}</Text>
      <Text href="https://tapu.com" highlight pointer underline>tapu.com</Text>
      <Text>'da Yazılım Geliştirici olarak çalışıyor ve </Text>
      <Text href="#" onClick={() => setOpenProjects(true)} pointer underline highlight>açık kaynaklı</Text>
      <Text> projeler geliştiriyorum.</Text>
    </Text>
  )
}

const English = ({ t, theme, setOpenStartups, setOpenProjects }) => {
  return (
    <Text>{t('iam')} <Text pointer target="_blank" href="MelihCaliskan_Resume.pdf" highlight>{t('name')}.
      <br />
      {t('student')} </Text> {t('university')}, <Text highlight>{t('faculty')}</Text>.
      Frontend Developer at <Text href="https://tapu.com" highlight pointer underline>tapu.com</Text><Text> and develop </Text><Text href="#" onClick={() => setOpenProjects(true)} pointer underline highlight>open source</Text><Text> projects.</Text>
    </Text>
  )
}
const Deutsch = ({ t, theme, setOpenStartups, setOpenProjects }) => {
  return (
    <Text>{t('iam')} <Text pointer target="_blank" href="MelihCaliskan_Resume.pdf" highlight>{t('name')}.</Text>
      <br />
      <Text>{t('student')}</Text> {t('university')}, <Text highlight>{t('faculty')}</Text>.
      {' ' + t('myown')} <Text href="#" onClick={() => setOpenStartups(true)} pointer underline highlight>{t('startup')}</Text> {t('workon')} <Text href="#" onClick={() => setOpenProjects(true)} pointer underline highlight>{t('freelance')}</Text>  {t('projects')}
    </Text>
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
        <h1 style={{ fontSize: '36px', color: '#464646', fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif", fontWeight: 700 }}>{t('loading')}</h1>
      </div>
    )
  }

  return (
    <Container>
      <Header {...props} />
      <Startups title={t('modalStartup')} open={openStartups} setOpen={setOpenStartups} {...props} />
      <Projects title={t('modalProject')} open={openProjects} setOpen={setOpenProjects} {...props} />

      <Text id="text-container">
        <LanguageToggle
          title={"Change language"}
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