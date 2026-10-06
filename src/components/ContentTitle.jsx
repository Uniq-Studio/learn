export default function ContentTitle(
    {subject, title, urgent, subtitle, onClickBack}
) {
    return (
        <div>
            <p className="text-label-sm p-sm">{subject}</p>
            <a onClick={onClickBack} href="#!" className="text-body-lg p-sm">&lt;Back</a>
            <h1 className="text-primary text-display-lg font-thin p-sm">{title}</h1>
            {subtitle && <p className="text-body-md p-sm">{subtitle}</p>}
            {urgent && <p className="text-error text-body-md p-sm">{urgent}</p>}
        </div>
    )
}