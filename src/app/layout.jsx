import Navbar from "Components/Navbar"
import Footer from "Components/Footer"

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Codeblogs</title>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}