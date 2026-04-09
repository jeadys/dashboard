type Props = {
    title: string;
    onClick: () => void;
};

export const PlanFlightButton = ({title, onClick}: Props) => {
    return (
        <button
            onClick={onClick}
            className="flex mx-auto text-white bg-blue-900 px-5 py-2 rounded-md hover:cursor-pointer hover:bg-blue-800"
        >
            {title}
        </button>
    );
};