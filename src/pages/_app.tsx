import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global-styles'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <meta name="theme-color" content="#111111" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
