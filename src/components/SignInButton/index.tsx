import * as S from './styles'
import { SignInButtonProps } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignInButton = (props: SignInButtonProps) => {
  // const {} = props
  const isLoggedIn = true

  return isLoggedIn ? (
    <S.Container type="button">
      <S.GitHubIcon isLoggedIn />
      <S.Label>Julio Cesar Mowes</S.Label>

      <S.CloseIcon />
    </S.Container>
  ) : (
    <S.Container type="button">
      <S.GitHubIcon />
      <S.Label>Logar-se com o Github</S.Label>
    </S.Container>
  )
}

export default SignInButton
