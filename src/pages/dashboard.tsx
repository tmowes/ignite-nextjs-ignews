import { NextPage } from 'next'

import * as C from '~/components'
import * as S from '~/styles/pages/dashboard'

const Dashboard: NextPage = () => {
  return (
    <S.Container>
      <C.MetaTags title="Dashboard" />
      <S.Title>Dashboard Page</S.Title>
    </S.Container>
  )
}

export default Dashboard
