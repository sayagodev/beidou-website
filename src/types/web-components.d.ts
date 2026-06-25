import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ot-dropdown': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
      'ot-tabs': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}
