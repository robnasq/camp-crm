import { mdiArrowLeftCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useNavigate } from "react-router-dom";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="max-md:shadow z-50 relative bg-white rounded-b-3xl mb-10 w-full items-center max-md:justify-between py-6 flex px-10  ">
      <span onClick={handleBack}> 
        <Icon
          path={mdiArrowLeftCircleOutline}
          className="text-[#ccc] md:hidden font-light cursor-pointer"
          title="Go back"
          size={2}
        />
      </span>
      {children}
    </div>
  );
};
