import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

export const metadata = {
  title: "QuickTraderSetup",
  description:
    "QuickTraderSetup is a clean and intuitive web app designed to help traders quickly access and understand key trading tools and concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <main>
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />
        </main>
      </body>
    </html>
  );
}
