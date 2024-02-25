import Icon from "@mdi/react"

type IIcon = {
  path: string
  name: string;
}
export const MenuItem: React.FC<IIcon> = ( {path, name}) => {
  return (
    <div className="flex hover:text-[#AA0019] cursor-pointer transition-all duration-300  my-6 gap-3"  >
      <Icon className="text-[#AA0019]" path={path} size={1} />
      <span>{name}</span>
    </div>
  )
}
