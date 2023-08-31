import './styles/reset.css';
import styles from './styles/layout.module.scss';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gamegogs - La chasse aux trésors',
  description: 'Base de donnée et marketplace pour les collectionneurs de jeux vidéos',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({children,}:{children: React.ReactNode}) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="./app/favicon.ico" />
      </head>
      <body className={styles.body__container}>
        {children}
      </body>
    </html>
  )
}
