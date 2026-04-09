import {EmployeeList} from "../components/employee/EmployeeList";
import {type EmployeeType} from "../components/employee/EmployeeList";
import {Section} from "../components/Section";

const employees: EmployeeType[] = [
    { id: 1, name: "Alice Johnson", title: "Software Engineer", status: true, department: "CIS" },
    { id: 2, name: "Bob Smith", title: "Product Manager", status: false, department: "Finance" },
    { id: 3, name: "Charlie Brown", title: "UX Designer", status: true, department: "Cyber" },
    { id: 4, name: "Diana Prince", title: "QA Engineer", status: true, department: "DETCO" },
    { id: 5, name: "Ethan Clark", title: "DevOps Engineer", status: false, department: "Ground" },
    { id: 6, name: "Fiona Davis", title: "HR Manager", status: true, department: "Air" },
    { id: 7, name: "George Miller", title: "Data Analyst", status: true, department: "Whitecell" },
    { id: 8, name: "Hannah Wilson", title: "Marketing Specialist", status: false, department: "CIS" },
    { id: 9, name: "Ian Taylor", title: "Backend Developer", status: true, department: "Cyber" },
    { id: 10, name: "Julia Anderson", title: "Frontend Developer", status: false, department: "Finance" },
]

export const Employee = () => {
    return (
        <Section title="Employees" description="Our employees">
            <EmployeeList employees={employees}/>
        </Section>
    )
}