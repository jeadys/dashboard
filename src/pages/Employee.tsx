import {EmployeeList} from "../components/employee/EmployeeList";
import {type EmployeeType} from "../components/employee/EmployeeList";
import {Section} from "../components/Section";

const employees: EmployeeType[] = [
    { id: 1, name: "Alice Johnson", title: "Helicopter Pilot", status: true, department: "Apache" },
    { id: 2, name: "Bob Smith", title: "Jet Fighter Pilot", status: true, department: "F-16" },
    { id: 3, name: "Charlie Brown", title: "Helicopter Pilot", status: false, department: "Black Hawk" },
    { id: 4, name: "Diana Prince", title: "Jet Fighter Pilot", status: true, department: "F-35" },
    { id: 5, name: "Ethan Clark", title: "Helicopter Pilot", status: true, department: "Chinook" },
    { id: 6, name: "Fiona Davis", title: "Jet Fighter Pilot", status: false, department: "Su-27" },
    { id: 7, name: "George Miller", title: "Helicopter Pilot", status: true, department: "Apache" },
    { id: 8, name: "Hannah Wilson", title: "Jet Fighter Pilot", status: true, department: "MiG-29" },
    { id: 9, name: "Ian Taylor", title: "Helicopter Pilot", status: false, department: "Black Hawk" },
    { id: 10, name: "Julia Anderson", title: "Jet Fighter Pilot", status: true, department: "F-16" },
];

export const Employee = () => {
    return (
        <Section title="Employees" description="Our employees">
            <EmployeeList employees={employees}/>
        </Section>
    )
}