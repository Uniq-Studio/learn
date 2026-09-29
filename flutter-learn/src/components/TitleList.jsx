export default function TitleText(
    {title, body, list}
) {
    return (
        <div>
            <h1 className="text-secondary text-display-sm font-normal p-sm">{title}</h1>
            {body && <p className="text-body-md p-sm">{body}</p>}
            <ul>
                {list.map((item, index) => (
                    <li key={index}><p className="text-body-md p-sm"><strong>{item.heading}: </strong>{item.description}</p></li>
                        ))}
            </ul>
        </div>
    );
}