import Navbar from './components/Navbar'
import Provider from './components/Provider'
import './styles/globals.css'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  )
}
