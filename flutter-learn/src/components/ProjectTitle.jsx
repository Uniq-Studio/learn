export default function ProjectTitle(
    {subject, title, academic, week}
) {
    return (
        <div>
            <p className="text-label-sm p-sm">{subject}</p>
            <h1 className="text-primary text-display-lg font-thin p-sm">{title}</h1>
            <p className="text-body-md p-sm">Academics: {academic}</p>
            <p className="text-body-md p-sm">Session Date: Week {week}</p>
        </div>
    )
}