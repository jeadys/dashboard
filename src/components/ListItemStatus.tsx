type Props = {
    text: string
}

export const ListItemStatus = ({ text }: Props) => {
    return <span
        className={`inline-block h-3 w-3 rounded-full ${
            text === "Present" ? "bg-green-500" : "bg-red-500"
        }`}
    />
}