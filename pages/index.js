import { Link, i18n, withTranslation } from '../i18n'
import React, { useState } from 'react';

import Container from '../components/Container'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Text from '../components/Text'
import ThemeToggle from '../components/ThemeToggle';
import Twemoji from '../components/Twemoji';
import styled from 'styled-components'
import { useRouter } from 'next/router'

const LanguageToggle = styled.button`
    border:0;
    margin-left:-5px;
    background:transparent;
    font-weight:700;
    color:${({ theme }) => theme.body_600};
`

const Home = ({ loading, t, isLight, theme, toggleTheme }) => {

  const handleLanguage = () => {
    const language = i18n.language === 'en' ? 'de' : i18n.language === 'de' ? 'tr' : 'en'
    i18n.changeLanguage(language)
  }

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
          </LanguageToggle>, ben <Text color={theme.body_700}>Melih Çalışkan.</Text> Dumlupınar Üniversitesi <Text color={theme.body_700}>Bilgisayar Mühendisliği</Text>  öğrencisiyim.
        Kendi <Text underline color={theme.body_700}>girişimlerimi</Text> geliştiriyor ve <Text underline color={theme.body_700}>freelance</Text>  projelerde çalışıyorum.
      </Text>
      </Fade>
    </Container>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Home)