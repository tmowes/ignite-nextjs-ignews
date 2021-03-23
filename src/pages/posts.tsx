import { NextPage } from 'next'

import * as C from '~/components'
import * as S from '~/styles/pages/posts'

const Posts: NextPage = () => {
  return (
    <S.Container>
      <C.MetaTags title="Posts" />
      <S.Title>Posts Page</S.Title>
    </S.Container>
  )
}

export default Posts
