/* eslint-disable no-irregular-whitespace */
import { NextPage } from 'next'

import * as C from '~/components'
import * as S from '~/styles/pages/posts'

const Posts: NextPage = () => {
  return (
    <S.Container>
      <C.MetaTags title="Posts" />
      <S.Main>
        <S.Post>
          <S.Link>
            <S.PostTitle>Refactoring de classes e typescript</S.PostTitle>
            <S.CreatedAt>12 de março de 2021</S.CreatedAt>
            <S.Content>
              💻 Sobre o desafio
              Nesse desafio, você deverá criar uma aplicação para treinar o que
              aprendeu até agora no ReactJS Essa será uma aplicação já funcional
              onde o seu principal objetivo é realizar dois processos de
              migração: de Javascript para Typescript e de Class Components para
              Function Components. A seguir veremos com mais detalhes o que e
              como precisa ser feito 🚀
            </S.Content>
          </S.Link>
        </S.Post>
        <S.Post>
          <S.Link>
            <S.PostTitle>Refactoring de classes e typescript</S.PostTitle>
            <S.CreatedAt>12 de março de 2021</S.CreatedAt>
            <S.Content>
              💻 Sobre o desafio
              Nesse desafio, você deverá criar uma aplicação para treinar o que
              aprendeu até agora no ReactJS Essa será uma aplicação já funcional
              onde o seu principal objetivo é realizar dois processos de
              migração: de Javascript para Typescript e de Class Components para
              Function Components. A seguir veremos com mais detalhes o que e
              como precisa ser feito 🚀
            </S.Content>
          </S.Link>
        </S.Post>
        <S.Post>
          <S.Link>
            <S.PostTitle>Refactoring de classes e typescript</S.PostTitle>
            <S.CreatedAt>12 de março de 2021</S.CreatedAt>
            <S.Content>
              💻 Sobre o desafio
              Nesse desafio, você deverá criar uma aplicação para treinar o que
              aprendeu até agora no ReactJS Essa será uma aplicação já funcional
              onde o seu principal objetivo é realizar dois processos de
              migração: de Javascript para Typescript e de Class Components para
              Function Components. A seguir veremos com mais detalhes o que e
              como precisa ser feito 🚀
            </S.Content>
          </S.Link>
        </S.Post>
      </S.Main>
    </S.Container>
  )
}

export default Posts
