import { Outlet } from "react-router-dom";
import PackagesBackgrond from "../components/packages/PackagesBackgrond";

function Packages() {
  return (
    <PackagesBackgrond>
      <Outlet />
    </PackagesBackgrond>
  );
}

export default Packages;
