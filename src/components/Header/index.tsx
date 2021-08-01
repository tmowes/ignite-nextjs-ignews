import ActiveLink from '../ActiveLink'
import SignInButton from '../SignInButton'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src="/images/logo.svg" />
        <S.Nav>
          <ActiveLink href="/">
            <S.Title>Home</S.Title>
          </ActiveLink>
          <ActiveLink href="/posts">
            <S.Title>Posts</S.Title>
          </ActiveLink>
        </S.Nav>
        <SignInButton />
      </S.Content>
    </S.Container>
  )
}

export default Header
