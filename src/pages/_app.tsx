import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '~/styles/GlobalStyles'
import * as themes from '~/styles/themes'
import * as C from '~/components'

const App = ({ Component, pageProps }: AppProps) => (
  <NextAuthProvider session={pageProps.session}>
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <C.MetaTags />
      <C.Header />
      <Component {...pageProps} />
    </ThemeProvider>
  </NextAuthProvider>
)

export default App
