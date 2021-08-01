import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { RichText } from 'prismic-dom'

import * as C from '~/components'
import { getPrismicClient } from '~/services'
import * as S from '~/styles/pages/post'
import { PostProps } from '~/types/posts'

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req })
  const { slug } = params

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const prismic = getPrismicClient(req)

  const { data, last_publication_date } = await prismic.getByUID(
    'post',
    String(slug),
    {},
  )

  const post = {
    slug,
    title: RichText.asText(data.title),
    content: RichText.asHtml(data.content),
    updatedAt: new Date(last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }
  return {
    props: {
      post,
    },
  }
}

export default function Post(props: PostProps) {
  const {
    post: { slug, title, content, updatedAt },
  } = props
  return (
    <S.Container>
      <C.MetaTags title={slug} />
      <S.Main>
        <S.Article>
          <S.PostTitle>{title}</S.PostTitle>
          <S.CreatedAt>{updatedAt}</S.CreatedAt>
          <S.Content dangerouslySetInnerHTML={{ __html: content }} />
        </S.Article>
      </S.Main>
    </S.Container>
  )
}
