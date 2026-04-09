import { PlanFlightSelectBox } from "./PlanFlightSelectBox";

type Props = {
    title: string;
    isOpen: boolean;
    onClose: () => void;
};

export const PlanFlightDialog = ({ title, isOpen, onClose }: Props) => {
    if (!isOpen) return null;

    const flightOptions = [
        { value: "VOL", label: "Volkel" },
        { value: "GIL", label: "Gilze" },
        { value: "EIN", label: "Eindhoven" },
        { value: "LEE", label: "Leeuwarden" },
    ];

    const employeeOptions = [
        { value: "piet", label: "Piet" },
        { value: "henk", label: "Henk" },
        { value: "gerry", label: "Gerry" },
        { value: "hans", label: "Hans" },
    ];

    const planeOptions = [
        { value: "apache", label: "Apache" },
        { value: "f-35", label: "F-35" },
        { value: "f-16", label: "F-16" },
    ];

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={onClose} // clicking outside closes modal
        >
            <div
                className="bg-white rounded-lg p-6 w-96 shadow-lg z-10"
                onClick={(e) => e.stopPropagation()} // prevent closing on dialog click
            >
                <h2 className="text-xl font-bold mb-4">{title}</h2>

                {/* Reusable Select Boxes */}
                <PlanFlightSelectBox label="From" options={flightOptions} />
                <PlanFlightSelectBox label="To" options={flightOptions} />
                <PlanFlightSelectBox label="Pilot" options={employeeOptions} />
                <PlanFlightSelectBox label="Plane" options={planeOptions} />

                {/* Flight Dates */}
                <label className="block mb-3">
                    Flight Start Date:
                    <input
                        type="date"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </label>

                <label className="block mb-4">
                    Expected Return Date:
                    <input
                        type="date"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </label>

                {/* Buttons */}
                <div className="flex justify-end gap-2">
                    <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};