import Navbar from './components/Navbar'
import Provider from './components/Provider'
import '../public/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>First app with Next 13</title>
      </head>
      <body>
        <Provider>
          <Navbar />
          <div style={{ maxWidth: '1200px', margin: 'auto', padding: '40px' }}>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
