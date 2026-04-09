type Props = {
    children: React.ReactNode
}

export const List = ({children}: Props) => {
return <ul className="w-full">{children}</ul>
}
