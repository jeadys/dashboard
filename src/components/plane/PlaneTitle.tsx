type Props = {
    planeTitle: string
}

export const PlaneTitle = ({planeTitle}: Props) => {
    return (
        <p className="line-clamp-1 max-w-max break-all text-gray-400 hover:underline">
            {planeTitle}
        </p>
    )
}