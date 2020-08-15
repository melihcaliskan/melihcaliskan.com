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

const LanguageToggle = styled.button`
    cursor:pointer;
    border:0;
    margin-left:-5px;
    background:transparent;
    font-weight:700;
    color:${({ theme }) => theme.body_600};
`

const Turkish = ({ t, theme }) => {
  return (
    <Text>{t('iam')} <Text color={theme.body_700}>{t('name')}.</Text> {t('university')} <Text color={theme.body_700}>{t('faculty')}</Text> {t('student')}.
      {' ' + t('myown')} <Text underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}

const English = ({ t, theme }) => {
  return (
    <Text>{t('iam')} <Text color={theme.body_700}>{t('name')}.
      <br />
      {t('student')} </Text> {t('university')}, <Text color={theme.body_700}>{t('faculty')}</Text>.
      {' ' + t('myown')} <Text underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}
const Deutsch = ({ t, theme }) => {
  return (
    <Text>{t('iam')} <Text color={theme.body_700}>{t('name')}.
      <br />
      {t('student')} </Text> {t('university')}, <Text color={theme.body_700}>{t('faculty')}</Text>.
      {' ' + t('myown')} <Text underline color={theme.body_700}>{t('startup')}</Text> {t('workon')} <Text underline color={theme.body_700}>{t('freelance')}</Text>  {t('projects')}
    </Text>
  )
}
const Home = ({ loading, t, isLight, theme, toggleTheme }) => {
  const language = i18n.language
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
    <Container>
      <Fade>
        <ThemeToggle isLight={isLight} theme={theme} toggleTheme={toggleTheme} />
        <Text>
          <LanguageToggle
            title={t('changelanguage')}
            type='button'
            onClick={() => handleLanguage()}>
            {t('hello')}
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-down fa-w-10 fa-2x"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" class=""></path></svg>
          </LanguageToggle>
          {", "}
          {language == "tr" ?
            <Turkish t={t} theme={theme} />
            :
            language == "en" ?
              <English t={t} theme={theme} />
              :
              language == "de" &&
              <Deutsch t={t} theme={theme} />
          }
        </Text>
      </Fade>
    </Container>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)