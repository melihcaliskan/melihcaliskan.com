import React, { useState } from 'react';

import Container from '../components/Container'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Text from '../components/Text'
import Twemoji from '../components/Twemoji';
import { useRouter } from 'next/router'

const Home = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <Fade>
        <Text onClick={() => toggleTheme()}>
          Merhaba, ben <Text color={theme.body_700}>Melih Çalışkan.</Text> Dumlupınar Üniversitesi <Text color={theme.body_700}>Bilgisayar Mühendisliği</Text>  öğrencisiyim.
        Kendi <Text underline color={theme.body_700}>girişimlerimi</Text> geliştiriyor ve <Text underline color={theme.body_700}>freelance</Text>  projelerde çalışıyorum.
      </Text>
      </Fade>
    </Container>
  );
}
export default Home