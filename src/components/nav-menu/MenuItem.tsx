import Icon from "@mdi/react";
import clsx from "clsx";
import { Link } from "react-router-dom";

type IIcon = {
  variants?: 'sm';
  path: string;
  name: string;
  link: string;
  onclick?: () => void;
};
export const MenuItem: React.FC<IIcon> = ({ path, name, link, onclick, variants }) => {
  return (
    <div onClick={onclick}>
      <Link
        to={link}
        className={clsx('flex hover:text-[#AA0019] cursor-pointer transition-all duration-300  my-6 gap-3', {
          'ihover:text-[#AA0019] border-none  my-1 ': variants === 'sm',
          
        })}
      >
        <Icon className="text-[#AA0019]" path={path} size={1} />
        <span className="uppercase text-base">{name}</span>
      </Link>
    </div>
  );
};
