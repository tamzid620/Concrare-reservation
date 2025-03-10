
import "../globals.css";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";



export const metadata = {
  title: "Concrare",
  description: "Developed by marketien",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
