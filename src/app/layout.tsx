import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Infinitune - Beats infinitos con IA gratis',
  description: 'Genera beats profesionales con inteligencia artificial. 100% gratis, sin registro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}