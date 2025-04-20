export const metadata = {
  title: "QuickTraderSetup",
  description:
    "QuickTraderSetup is a clean and intuitive web app designed to help traders quickly access and understand key trading tools and concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
