type Props = {
    planeName: string
}

export const PlaneName = ({planeName}: Props) => {
    return (
        <p className="line-clamp-1 max-w-max break-all text-white hover:underline">
            {planeName}
        </p>
    )
}