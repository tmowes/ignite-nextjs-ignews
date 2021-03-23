import * as S from './styles'
import { SubscribeButtonProps } from './types'

const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <S.Container type="button">
      <S.Label>Inscreva-se</S.Label>
    </S.Container>
  )
}

export default SubscribeButton
