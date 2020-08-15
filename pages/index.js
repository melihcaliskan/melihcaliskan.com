import { Link, i18n, withTranslation } from '../i18n'
import React, { useState } from 'react';

import Container from '../components/Container'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Text from '../components/Text'
import ThemeToggle from '../components/ThemeToggle';
import Twemoji from '../components/Twemoji';
import handleLanguage from '../helpers/handleLanguage'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const LanguageSelect = styled.select`
  width:auto;
  border:0;
  background:transparent;
  display:inline;
  font-size:64px;
  font-weight:700;
  color:${({ theme }) => theme.body_600};

  & optgroup { 
    font-size:10px;
  }

`

const Turkish = ({ t, theme }) => {
  return (
    <Text>, {t('iam')} <Text color={theme.body_700}>{t('name')}.</Text> {t('university')} <Text color={theme.body_700}>{t('faculty')}</Text> {t('student')}.
      {' ' + t('myown')} <Text underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}

const English = ({ t, theme }) => {
  return (
    <Text>, {t('iam')} <Text color={theme.body_700}>{t('name')}.
      <br />
      {t('student')} </Text> {t('university')}, <Text color={theme.body_700}>{t('faculty')}</Text>.
      {' ' + t('myown')} <Text underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}
const Deutsch = ({ t, theme }) => {
  return (
    <Text>, {t('iam')} <Text color={theme.body_700}>{t('name')}.
      <br />
      {t('student')} </Text> {t('university')}, <Text color={theme.body_700}>{t('faculty')}</Text>.
      {' ' + t('myown')} <Text underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}

const languageList = [
  {
    name: "Merhaba",
    value: "tr",
  },
  {
    name: "Hello",
    value: "en",
  },
  {
    name: "Hallo",
    value: "de",
  },
]

const Home = ({ loading, t, isLight, theme, toggleTheme }) => {
  const [language, setLanguage] = useState(i18n.language);

  const handleLoad = () => {
    // WIP
    const text = "loading"
    for (let i = 0; text.length >= i; i++) {
      setTimeout(() => {
        window.history.replaceState(null, null, `/${text.substr(i)}`);
        console.log(text.substr(i))
      }, 300)
    }
  }

  if (loading) {
    return ("")
  }

  return (
    <Fade>
      <Container>
        <ThemeToggle isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
        <LanguageSelect onChange={(e) => handleLanguage(e)} value={i18n.language}>
          <optgroup>
            {languageList.map(item =>
              <option key={item.value} value={item.value}>
                {item.name}
              </option>

            )}
          </optgroup>
        </LanguageSelect>
        {language == "tr" ?
          <Turkish t={t} theme={theme} />
          :
          language == "en" ?
            <English t={t} theme={theme} />
            :
            language == "de" &&
            <Deutsch t={t} theme={theme} />
        }
      </Container>
    </Fade>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)