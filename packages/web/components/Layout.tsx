import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./Sidebar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
