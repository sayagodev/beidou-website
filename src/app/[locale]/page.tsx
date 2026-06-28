import type { NextPageIntlayer } from 'next-intlayer'
import { IntlayerServerProvider } from 'next-intlayer/server'
import { DocsPageView } from '@/features/docs/views/docs-page-view'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }]
}

const HomePage: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params

  return (
    <IntlayerServerProvider locale={locale}>
      <DocsPageView />
    </IntlayerServerProvider>
  )
}

export default HomePage
