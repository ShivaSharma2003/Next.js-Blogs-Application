import Navbar from "Components/Navbar";
import Providers from "./provider";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Codeblogs</title>
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <Providers>
        <main>
          <Navbar />
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
