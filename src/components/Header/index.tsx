import * as C from '~/components'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src="/images/logo.svg" />
        <S.Nav>
          <S.Title isActive>Home</S.Title>
          <S.Title>Posts</S.Title>
        </S.Nav>
        <C.SignInButton />
      </S.Content>
    </S.Container>
  )
}

export default Header
