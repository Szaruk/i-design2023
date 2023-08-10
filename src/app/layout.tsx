import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
