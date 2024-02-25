import Icon from "@mdi/react"
import { Link } from "react-router-dom";

type IIcon = {
  path: string
  name: string;
  link: string;
  onclick?: () => void;
}
export const MenuItem: React.FC<IIcon> = ( {path, name, link, onclick}) => {
  return (
    <div onClick={onclick}>
      <Link to={link} className="flex hover:text-[#AA0019] cursor-pointer transition-all duration-300  my-6 gap-3"  >
      <Icon className="text-[#AA0019]" path={path} size={1} />
      <span className="uppercase text-base">{name}</span>
    </Link>
    </div>
    
  )
}
