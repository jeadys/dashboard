type Props = {
    employeeTitle: string
}

export const EmployeeTitle = ({employeeTitle}: Props) => {
    return (
        <p className="line-clamp-1 max-w-max break-all text-gray-400 hover:underline">
            {employeeTitle}
        </p>
    )
}