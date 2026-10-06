export default function LearningResources(
    {resources}
){
    return (
        <article className="container m-lg">
            <h2 className="text-secondary text-display-sm font-normal p-sm">Learning Resources</h2>
            <ul>
                {resources.map((resource) => (
                    <li>
                        <a href={resource.link}
                           className="text-body-md font-thick p-hor-md inline-paragraph">{resource.name}</a> <a
                        href={resource.link}
                        className="text-body-md font-thin inline-paragraph">by {resource.author}</a>
                        <p className="text-label-sm p-sm">{resource.link}</p>
                    </li>
                ))}
            </ul>
        </article>
    )
}