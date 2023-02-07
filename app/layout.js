import Navbar from './components/Navbar'
import Provider from './components/Provider'
import '../public/globals.css'

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html lang="en">
        <body className="bg-[#111111]">
          <Navbar />
          {children}
        </body>
      </html>
    </Provider>
  )
}
