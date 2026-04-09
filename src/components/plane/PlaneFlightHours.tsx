import { ClockIcon } from '@heroicons/react/24/solid'

type Props = {
    planeFlightHours: number
}

export const PlaneFlightHours = ({planeFlightHours}: Props) => {
    return (
        <span className="text-white flex flex-row justify-between gap-2 ml-auto">
            <span>
                {planeFlightHours}
            </span>
            <span>
                <ClockIcon className="size-6 text-white" />
            </span>
        </span>
    )
}