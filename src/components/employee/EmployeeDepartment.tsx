type Props = {
    employeeDepartment: string
}

export const EmployeeDepartment = ({employeeDepartment}: Props) => {
    return (
        <span className="ml-auto text-white duration:hidden">{employeeDepartment}</span>
    )
}