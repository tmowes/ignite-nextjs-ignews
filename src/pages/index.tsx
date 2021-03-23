import * as C from '~/components'
import * as S from '~/styles/pages'

export default function Home() {
  return (
    <>
      <C.MetaTags />
      <S.Main>
        <S.Section>
          <S.Greetings>👏 Olá, bem vindo</S.Greetings>
          <S.Title>
            Noticias sobre o mundo do <S.React>React.</S.React>
          </S.Title>
          <S.Description>Obtenha acesso a todas publicações</S.Description>
          <S.Text>por apenas R$9,90/mês</S.Text>
          <C.SubscribeButton />
        </S.Section>
        <S.HeroImage src="/images/avatar.svg" alt="coding girl" />
      </S.Main>
    </>
  )
}
