import {List} from "../List"
import {ListItem} from "../ListItem"
import {EmployeeName} from "./EmployeeName"
import {EmployeeTitle} from "./EmployeeTitle"
import {EmployeeDepartment} from "./EmployeeDepartment"
import {useSearchFilter} from "../../hooks/useSearchFilter"

export type EmployeeType = {
    id: number
    name: string
    title: string
    department: string
    status: boolean
}

type Props = {
    employees: EmployeeType[]
}

export const EmployeeList = ({employees}: Props) => {
    const { search, setSearch, filteredData } = useSearchFilter<EmployeeType>(
        employees,
        ["name", "title", "department"]
    );

    return (
        <>
            <input
                className="text-white my-5 bg-gray-700 rounded-sm p-2"
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        <List>
            {filteredData.map((employee: EmployeeType) => (
                <ListItem key={employee.id}>
                    <span className="grow">
                     <EmployeeName employeeName={employee.name}/>
                     <EmployeeTitle employeeTitle={employee.title}/>
                  </span>

                    <EmployeeDepartment employeeDepartment={employee.department} />
                </ListItem>
            ))}
        </List>
            </>
    )
}