export default function TitleText(
    {title, body}
) {
    return (
        <div>
            <h1 className="text-secondary text-display-sm font-normal p-sm">{title}</h1>
            <p className="text-body-md p-sm">{body}</p>
        </div>
    )
}