import { useIntlayer } from 'next-intlayer'
import { FileText, BookOpen, Code, MessageCircle } from 'lucide-react'
import './footer.css'

export function Footer() {
  const content = useIntlayer('footer')

  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__item font-beidou">
          北斗
        </span>
        <span className="footer__item">
          <FileText size={14} className="footer__icon" />
          {content.license}
        </span>
      </div>
      <div className="footer__right">
        <a className="footer__link" href="https://sayago.dev" target='_blank'>
          <BookOpen size={14} className="footer__icon" />
          <span>{content.me}</span>
        </a>
        <a className="footer__link" href="https://github.com/sayagodev/beidou" target="_blank" rel="noopener noreferrer">
          <Code size={14} className="footer__icon" />
          <span>{content.github}</span>
        </a>
        <a className="footer__link" href="mailto:hi@sayago.dev" target='_blank'>
          <MessageCircle size={14} className="footer__icon" />
          <span>{content.email}</span>
        </a>
        <span className='footer__utf'>UTF-8</span>
        <span>v1.1.1</span>
      </div>
    </footer>
  )
}
