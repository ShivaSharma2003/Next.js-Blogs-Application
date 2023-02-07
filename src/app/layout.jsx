import Navbar from "Components/Navbar";
import Sidebar from "@/app/Sidebar";
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
            <div className="w-[100%] flex flex-col items-center justify-start">
              <div className="w-[100%] md:w-[80%] flex flex-col md:grid grid-cols-12 md:gap-2">
                <div className="col-span-8 flex border-r-2 shadow-sm flex-col w-[100%] gap-2 ">
                  {children}
                </div>
                <Sidebar />
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
