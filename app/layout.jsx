import './globals.css';
import { Manrope } from '@next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html className={manrope.className} lang="es">
      <head />
      <body>{children}</body>
    </html>
  )
}
