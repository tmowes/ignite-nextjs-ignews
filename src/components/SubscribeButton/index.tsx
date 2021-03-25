import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { api, getStripeJs } from '~/services'
import * as S from './styles'
import { SubscribeButtonProps } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const [session] = useSession()
  const { push } = useRouter()

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github')
    }
    if (session?.activeSubscription) {
      push('/posts')
      return
    }
    try {
      const { data } = await api.post('/subscribe')
      const { sessionId } = data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(err.message)
    }
  }

  return (
    <S.Container type="button" onClick={handleSubscribe}>
      <S.Label>Inscreva-se</S.Label>
    </S.Container>
  )
}

export default SubscribeButton
