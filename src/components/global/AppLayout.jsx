import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout({ staticHeader = false }) {
  return (
    <>
      <Header staticHeader={staticHeader} />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
