import Navigation from "@components/navigation"
import '@styles/global.css'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'The best movies on the best framework',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}</body>
    </html>
  )
}
