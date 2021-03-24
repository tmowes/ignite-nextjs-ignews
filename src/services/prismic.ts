import Prismic from '@prismicio/client'

export const getPrismicClient = ()=>{
  const prismic = Prismic.client(
    process.env.PRISMIC_KEY,{
      accessToken: process.env.PRISMIC_KEY
    }
  )
}