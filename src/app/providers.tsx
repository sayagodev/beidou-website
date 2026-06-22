import BeidouProvider from '@/components/providers/beidou-provider'
import { IntlayerClientProvider } from 'next-intlayer'

export async function Providers({
  children,
  locale,
}: {
  children: React.ReactNode
  locale?: string
}) {
  return (
    <IntlayerClientProvider locale={locale}>
      <BeidouProvider />
      {children}
    </IntlayerClientProvider>
  )
}
