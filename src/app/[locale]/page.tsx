import type { NextPageIntlayer } from 'next-intlayer'
import { IntlayerServerProvider } from 'next-intlayer/server'
import { DocsPageView } from '@/features/docs/views/docs-page-view'

const HomePage: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params

  return (
    <IntlayerServerProvider locale={locale}>
      <DocsPageView />
    </IntlayerServerProvider>
  )
}

export default HomePage
