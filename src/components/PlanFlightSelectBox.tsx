type Option = {
    value: string;
    label: string;
};

type Props = {
    label: string;
    options: Option[];
};

export const PlanFlightSelectBox = ({ label, options }: Props) => {
    return (
        <label className="block mb-3">
            {label}:
            <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option value="">Select {label.toLowerCase()}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </label>
    );
};