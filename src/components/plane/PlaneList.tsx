import {List} from "../List"
import {ListItem} from "../ListItem"
import {PlaneName} from "./PlaneName.tsx";
import {PlaneTitle} from "./PlaneTitle.tsx";
import {useSearchFilter} from "../../hooks/useSearchFilter.tsx";
import {PlaneFlightHours} from "./PlaneFlightHours.tsx";

export type PlaneType = {
    id: number
    name: string
    title: string
    flightHours: number
}

type Props = {
    planes: PlaneType[]
}

export const PlaneList = ({planes}: Props) => {
    const { search, setSearch, filteredData } = useSearchFilter<PlaneType>(
        planes,
        ["name", "title", "flightHours"]
    );

    return (
        <>
            <input
                className="text-white my-5 bg-gray-700 rounded-sm p-2"
                type="text"
                placeholder="Search planes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        <List>
            {filteredData.map((plane: PlaneType) => (
                <ListItem key={plane.id}>
                    <span className="grow">
                     <PlaneName planeName={plane.name}/>
                     <PlaneTitle planeTitle={plane.title}/>
                  </span>

                    <PlaneFlightHours planeFlightHours={plane.flightHours} />
                </ListItem>
            ))}
        </List>
            </>
    )
}