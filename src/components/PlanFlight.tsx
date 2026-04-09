import { useState } from "react";
import { PlanFlightButton } from "./PlanFlightButton";
import { PlanFlightDialog } from "./PlanFlightDialog";

export const PlanFlight = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <PlanFlightButton title="Plan Mission" onClick={() => setIsOpen(true)} />
            <PlanFlightDialog
                title="Plan Mission"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
};