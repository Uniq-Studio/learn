export default function SubtitleTextList(
    {title, body, list, content}
) {
    return (
        <div>
            <h2 className="text-secondary text-title-lg font-extra-thick p-sm">{title}</h2>
            {body &&
                body.map((item) => (
                    <p className="text-body-md p-sm">{item.text}</p>
                    ))}
            {list && <ol className="p-lg m-lg">
                {list.map((item, index) => (
                    <li key={index}><p className="text-body-md p-sm">{item.task}</p></li>
                ))}
            </ol>}
            {content &&
                content}
        </div>
    );
}