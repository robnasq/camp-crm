import { Outlet } from "react-router-dom"
import { NavMenu } from "../components/nav-menu/NavMenu"

export const MainLayout = () => {
  return (
    <div>
      <div className="pb-[70px]">
      <Outlet />
      </div>
      
        <NavMenu />
    </div>
  )
}
