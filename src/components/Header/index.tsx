import * as C from '~/components'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src="/images/logo.svg" />
        <S.Nav>
          <C.ActiveLink href="/">
            <S.Title>Home</S.Title>
          </C.ActiveLink>
          <C.ActiveLink href="/posts">
            <S.Title>Posts</S.Title>
          </C.ActiveLink>
        </S.Nav>
        <C.SignInButton />
      </S.Content>
    </S.Container>
  )
}

export default Header
