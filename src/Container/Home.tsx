import { useState } from "react";
import Header from "../components/Header";
import CTA from "./CTA";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setOpen(true);
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="absolute w-full h-[100vh] bg-[#00000044]"></div>
      )}
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <Header label="View Audience" />
      <CTA openSidebar={openSidebar} />
    </div>
  );
};

export default Home;
