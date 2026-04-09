
type Props = {
    children: React.ReactNode
}

export const List = ({ children }: Props) => {
    return <ul className="flex flex-col justify-between h-64 divide-y divide-gray-100 dark:divide-white/5">{children}</ul>
}
