import Navbar from './components/Navbar'
import Provider from './components/Provider'
import Footer from './components/Footer'
import './styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <Provider>
      <html>
        <body className="text-white bg-black">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  )
}
