import { Link } from "react-router-dom";
import Logo from "../../assets/button-home-desktop.png";
export const Header = () => {
  return (
    <div className="bg-white fixed shadow-soft h-[52px] max-md:hidden  z-[1000] w-full">
      <img src={Logo} className="fixed top-0 left-0" />
      <div className="uppercase flex gap-6 ml-[250px] font-medium mt-[10px]">
        <Link to={"/"}>Campos de férias</Link>
        <Link to={"/"}>Programas escolares</Link>
        <Link to={"/"}>Multimédia</Link>
        <Link to={"/"}> A MyCamp</Link>
        <Link to={"/"}>Contactos</Link>
      </div>
    </div>
  );
};
