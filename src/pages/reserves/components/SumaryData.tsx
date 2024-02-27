import clsx from "clsx";

interface PlaceholderItem {
    text: string;
    complemento?: string;
  }
interface ISumaryData {
  variants?: "outline";
  label?: string;
  size?: "sm" | "md" | "lg";
  placeholder?: PlaceholderItem[] | any; // Definindo o tipo de placeholder como um array de objetos ou uma string
  onClick?: () => void;
}

export const Sumarydata = ({
  variants,
  label,
  size,
  placeholder,
  onClick,
  ...props
}: ISumaryData) => {
  return (
    <div className="mb-2 flex justify-between items-center ">
        <div>
        {label && (
        <span
          className={clsx("", {
            "text-neutral-medium text-[10px] mb-4 top-1 font-bold uppercase":
              variants === "outline",
          })}
        >
          {label}
        </span>
      )}
      <div
        className={clsx("", {
          " mb-2 font-semibold flex relative -top-1 flex-col justify-between text-black focus-visible:outline-none pb-5  w-full":
            variants === "outline",
        })}
        {...props}
      >
        {Array.isArray(placeholder) ? (
          placeholder.map((item, index) => (
                <div className={`flex items-center flex- ${item.complemento ? 'font-light' : ''}`} key={index}>
              <p className="whitespace-pre-line block">{item.text}</p>
              {item.complemento && (
                <p className="text-sm font-semibold">: {item.complemento}</p>
              )}
            </div>
          ))
        ) : (
          <div>
            <p className=" mr-3">{placeholder}</p>
          </div>
        )}
        </div>
     
      
      </div>
      <div>
      {onClick && (
          <button onClick={onClick} className="text-primary">
            Editar
          </button>
        )}
      </div>
    
    </div>
  );
};
