export default function ContentCard(
    {content, onClick}
) {
    return (
        <section>
            <h2 className="text-secondary text-display-sm font-normal p-sm">Content:</h2>
            <ul className="card_view">
                {content.map((item) => (
                <li className="app_card">
                    <div className="card_image_container">
                        <img src="https://www.uniqstudio.org/images/ui/home/pixel_10_pro_outline.webp" alt="Phone Outline"
                             className="phone_outline"/>
                        <img src={item.src} alt={item.alt} className="app_logo"/>
                    </div>
                    <div className="card_content">
                        <h3 className="text-headline-md font-normal p-sm">{item.title}</h3>
                        <p className="text-label-lg p-md">{item.label}</p>
                        <a onClick={item.onClick || onClick} href="#!"><p className="bubble full-width m-lg">Start Content</p></a>
                    </div>
                </li>
                ))}
            </ul>
        </section>
    )
}
