declare namespace NodeJS {
  export interface ProcessEnv {
    GITHUB_CLIENT_ID: string
    GITHUB_CLIENT_SECRET: string
    FAUNADB_KEY: string
    NEXT_PUBLIC_STRIPE_KEY: string
    STRIPE_API_KEY: string
    STRIPE_WEBHOOK_KEY: string
    STRIPE_SUCCESS_URL: string
    STRIPE_CANCEL_URL: string
    PRISMIC_KEY: string
    PRISMIC_URL: string
  }
}
