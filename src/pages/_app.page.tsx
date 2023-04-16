import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import { Nunito, Roboto_Mono } from 'next/font/google'
import { globalStyles } from 'src/styles/global'

const nunito = Nunito({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

globalStyles()
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div className={nunito.className}>
      <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
    </div>
  )
}
