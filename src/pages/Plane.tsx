import {PlaneList} from "../components/plane/PlaneList";
import {type PlaneType} from "../components/plane/PlaneList";
import {Section} from "../components/Section";

const planes: PlaneType[] = [
    {
        id: 1,
        name: "Apache",
        title: "AH-64",
        status: true,
    },
    {
        id: 2,
        name: "F-35",
        title: "Lightning II",
        status: false,
    },
    {
        id: 3,
        name: "F-16",
        title: "Figthing Falcon",
        status: true,
    },
]

export const Plane = () => {
    return (
        <Section title="Planes" description="our planes">
            <PlaneList planes={planes}/>
        </Section>
    )
}