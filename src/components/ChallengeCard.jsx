export default function ChallengeCard(
    {body}
) {
    return (
        <article className="container challenge m-md">
            <h2 className="text-secondary text-display-sm font-normal p-sm">Challenge:</h2>
            {body &&
                body.map((item) => (
                    <p className="text-body-md p-sm">{item.text}</p>
                ))}
        </article>
    )
}