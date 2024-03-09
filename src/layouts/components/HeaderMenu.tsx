import React, { useState, useEffect, useRef } from "react";
import { MenuItem } from "../../components/nav-menu/MenuItem";
import {
 mdiAccountCircleOutline,
 mdiApps,
 mdiChevronDown,
 mdiCreditCardCheckOutline,
 mdiExitToApp,
 mdiTicket,
} from "@mdi/js";
import Icon from "@mdi/react";




export const NavMenu: React.FC = () => {
 const [open, setOpen] = useState(false);
 const menuRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
 }, []);

 return (
    <div className="App w-10 h-10">
      <div className="menu-container w-5 h-5 relative" ref={menuRef}>
        <div
          className="menu-trigger cursor-pointer rounded-[20px] w-[70px] h-10 bg-primary flex items-center px-2"
          onClick={() => setOpen(!open)}
        >
            <span className="rounded-full flex items-center justify-center bg-white w-7 h-7 text-black font-bold">P</span>
          <Icon
            path={mdiChevronDown}
            size={1}
            className={open ? "transition-all rotate-180 text-white duration-700" : "transition-all duration-700 text-white"}
          />
        </div>

        <div
          className={`dropdown-menu transition-all duration-500 absolute p-3 top- -right-6 mt-2 w-64 bg-primary text-white shadow-lg rounded-lg ${
            open ? "opacity-100 scale-100 transform transition-all duration-500" : "opacity-0 scale-95 transform transition-all duration-500"
          }`}
        >
          <ul className="">
            <MenuItem
              path={mdiApps}
              variants="sm"
              name={"Início reservas"}
              link={"/"}
            />
            <MenuItem
              path={mdiAccountCircleOutline}
              variants="sm"
              name={"Perfil"}
              link={"profile"}
            />
            <MenuItem
              path={mdiTicket}
              variants="sm"
              name={"Reservas"}
              link={"reserves"}
            />
            <MenuItem
              path={mdiCreditCardCheckOutline}
              variants="sm"
              name={"Pagamentos"}
              link={"/payments"}
            />
            <MenuItem
              variants="sm"
              path={mdiExitToApp}
              name={"Fechar sessão"}
              link={""}
            />
          </ul>
        </div>
      </div>
    </div>
 );
};
