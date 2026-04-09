type Props = {
    imageUrl: string
}

export const ListItemImage = ({ imageUrl }: Props) => {
    return (
        <img
            alt=""
            src={imageUrl}
            className="size-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
        />
    )
}