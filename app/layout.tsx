import SupabaseProvider from '@/app/spabase-provider'
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
        <SupabaseProvider>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        </SupabaseProvider>
      </body>
    </html>
  )
}
