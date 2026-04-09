type Props = {
    children: React.ReactNode
}
export const ListItem = ({children}: Props) => {
    return <li className="group flex items-center gap-5 rounded-md p-2 hover:bg-gray-700">{children}</li>
}