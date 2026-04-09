type Props = {
    title: string
}
export const PlanFlightButton = ({title}: Props) => {
    return <button className="flex mx-auto text-white bg-blue-900 px-5 py-2 rounded-md hover:cursor-pointer hover:bg-blue-800">{title}</button>
}
