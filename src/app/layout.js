import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export const metadata = {
  title: "QuickTraderSetup",
  description:
    "QuickTraderSetup is a clean and intuitive web app designed to help traders quickly access and understand key trading tools and concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
