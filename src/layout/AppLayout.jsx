import Footer from "common/components/Footer";
import Navbar from "common/components/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}