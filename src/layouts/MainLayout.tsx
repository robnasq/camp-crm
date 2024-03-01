import { Outlet } from "react-router-dom";
import { NavMenu } from "../components/nav-menu/NavMenu";

interface MainLayoutProps {
  backgroundPattern: string;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ backgroundPattern }) => {

  return (
    <div className="md:flex">
      <div className="w-[20%] bg-top min-h:[1000px] bg-cover bg-repeat top-0 bottom-0 h-[100vh]" style={{ backgroundImage: `url(${backgroundPattern})`, backgroundSize: 'cover' }} />
      <div className="pb-[70px] md:w-[47%] md:ml-[10%]">
        <Outlet />
      </div>
      <NavMenu />
    </div>
  );
};


          