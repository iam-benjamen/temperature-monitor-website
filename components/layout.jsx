import Footer from "./Footer";
import Nav from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
