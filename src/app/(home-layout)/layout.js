
import Footer from "../Components/Shared/UserShared/Footer/Footer";
import Navbar from "../Components/Shared/UserShared/Navbar/Navbar";
import "../globals.css";

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
