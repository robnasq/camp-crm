import { mdiArrowRight } from "@mdi/js"
import { Button } from "../../../components/button/Button"
import Icon from "@mdi/react"

export const ReservesSujestion = () => {
  return (
    <div className="bg-secondary px-3 py-3 mb-6 flex-col rounded-3xl shadow flex  w-full ">
        <div className="w-full  h-[142px]">

        </div>
        <span className="text-white my-10 text-xl">
        <h2 className="font-bold ">Campo de ferias </h2>
        <p className="font-semibold">2024</p>
        </span>
        <Button type={"button"} variants="reserve" > 
          Reservar
          <Icon  path={mdiArrowRight} size={1} />
        </Button>
    </div>
  )
}
