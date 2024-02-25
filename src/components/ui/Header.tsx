import { mdiArrowLeftCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useNavigate } from "react-router-dom";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="shadow rounded-3xl w-full items-center justify-between py-6 flex px-10  ">
      <span onClick={handleBack}> 
        <Icon
          path={mdiArrowLeftCircleOutline}
          className="text-[#ccc] font-light cursor-pointer"
          title="Go back"
          size={2}
        />
      </span>
      {children}
    </div>
  );
};
