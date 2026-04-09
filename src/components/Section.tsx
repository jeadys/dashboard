type Props = {
    title: string
    description?: string
    children: React.ReactNode
}

export const Section = ({ title, description, children }: Props) => {
    return (
        <section>
            <header className="flex justify-between items-center top-0 z-10 bg-gray-1300 py-2 capitalize text-white sm:py-5">
                <h2 className="text-2xl font-black sm:text-3xl">{title}</h2>
                <h3 className="text-end line-clamp-1 break-all text-gray-300">
                    {description}
                </h3>
            </header>
            {children}
        </section>
    )
}