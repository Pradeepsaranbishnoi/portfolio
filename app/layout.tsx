import { Poppins } from "next/font/google"
import "./globals.css"
import type React from "react"
import Script from "next/script"
import type { Metadata } from "next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  verification: {
    google: "g0bHNVQYBLn6jxbAu3PnC7hXs3ZAfa7JwYzTi5ZAgmE",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Pradeep Saran | Personal Portfolio Website</title>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4ZGMWY2QQM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4ZGMWY2QQM');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-sans bg-dark text-white`}>{children}</body>
    </html>
  )
}



import './globals.css'