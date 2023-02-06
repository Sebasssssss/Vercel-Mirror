import Navbar from './components/Navbar'
import Provider from './components/Provider'
import '../public/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>First app with Next 13</title>
      </head>
      <body className="bg-[#111111]">
        <Provider>
          <Navbar />
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  )
}
