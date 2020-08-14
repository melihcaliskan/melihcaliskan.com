import '../assets/normalize.css'

import React, { useEffect, useState } from 'react'
import { darkTheme, lightTheme } from '../assets/theme';

import { GlobalStyles } from '../assets/global';
import Head from 'next/head'
//import Loader from '../helpers/Loader'
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../contexts/useDarkMode';
import useWindowSize from '../helpers/windowSize'

const App = ({ Component, pageProps, router, router: { asPath } }) => {
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const size = useWindowSize();
    const isMobile = size.width < 960
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Head>
                <title>Melih Çalışkan</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />

                <meta property="og:title" content="melihcaliskan.com" />
                <meta property="og:url" content="https://melihcaliskan.com" />
                <meta property="description" content="Personal website of Melih Çalışkan" />
                <meta property="og:description" content="Personal website of Melih Çalışkan" />
                <link rel="icon" href="/assets/favicon.ico" />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '[Tracking ID]');
                        `,
                    }}
                />
            </Head>

            <GlobalStyles />

            <Component
                //loading={!componentMounted}
                isMobile={isMobile}
                isLight={theme === 'light'}
                theme={theme === 'light' ? lightTheme : darkTheme}
                toggleTheme={toggleTheme}
                {...pageProps}
            />
        </ThemeProvider>
    )
}

export default App