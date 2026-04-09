type Props = {
    children: React.ReactNode
}
export const ListItem = ({ children }: Props) => {
    return <li className="f relative flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4 items-center">
        {children}
        </div>
    </li>
}