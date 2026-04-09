type Props = {
    employeeName: string
}

export const EmployeeName = ({employeeName}: Props) => {
    return (
        <p className="line-clamp-1 max-w-max break-all text-white hover:underline">
            {employeeName}
        </p>
    )
}