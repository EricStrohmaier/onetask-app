import './globals.css'

export const metadata = {
  title: 'One Task App',
  description: 'Build a goal orientiert future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
