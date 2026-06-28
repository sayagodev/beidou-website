import { IntlayerServerProvider } from 'next-intlayer/server'
import { DocsPageView } from '@/features/docs/views/docs-page-view'

const HomePage = async () => {
  return (
    <IntlayerServerProvider locale="en">
      <DocsPageView />
    </IntlayerServerProvider>
  )
}

export default HomePage
