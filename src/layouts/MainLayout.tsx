import { Outlet } from "react-router-dom";
import { NavMenu } from "../components/nav-menu/NavMenu";
import { Header } from "./components/Header";

interface MainLayoutProps {
  backgroundPattern: string;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ backgroundPattern }) => {

  return (
    <div className="md:flex">
      <Header />
      <div className="w-[20%] bg-top min-h:[1000px] max-md:hidden fixed bg-cover h-[100vh]" style={{ backgroundImage: `url(${backgroundPattern})`, backgroundSize: 'cover' }} />
      <div className="pb-[70px] md:pt-[52px] md:w-[47%] md:ml-[30%]">
        <Outlet />
      </div>
      <div className="md:hidden">
      <NavMenu />
      </div>
    </div>
  );
};


          