import {PlaneList} from "../components/plane/PlaneList";
import {type PlaneType} from "../components/plane/PlaneList";
import {Section} from "../components/Section";

const planes: PlaneType[] = [
    {
        id: 1,
        name: "Apache",
        title: "AH-64",
        flightHours: 1200,
    },
    {
        id: 2,
        name: "F-35",
        title: "Lightning II",
        flightHours: 850,
    },
    {
        id: 3,
        name: "F-16",
        title: "Fighting Falcon",
        flightHours: 2000,
    },
]

export const Plane = () => {
    return (
        <Section title="Planes" description="our planes">
            <PlaneList planes={planes}/>
        </Section>
    )
}