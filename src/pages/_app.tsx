import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'
import * as C from '~/components'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyle />
    <C.MetaTags />
    <C.Header />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
