import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: 'Dandes Academy - Upskill With Live Classes, Projects & Interview Prep',
  description: 'Learn AI/ML, System Design, and Data Structures with live instructor-led classes, hands-on assignments, and interview preparation. Built for working professionals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
