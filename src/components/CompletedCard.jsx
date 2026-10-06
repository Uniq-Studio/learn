import ContentCard from "./ContentCard";

export default function CompletedCard(){
    return (
        <article className="horizontal">
            <div className="app_card">
                <div className="card_image_container">
                    <img src="https://www.uniqstudio.org/images/ui/home/pixel_10_pro_outline.webp" alt="Phone Outline"
                         className="phone_outline"/>
                    <img src="../../public/img/ui/checkmark.webp" alt="Check Mark" className="app_logo"/>
                </div>
                <div className="card_content">
                    <h3 className="text-headline-md font-normal p-sm">Completed</h3>
                    <p className="text-label-lg p-md">Well Done! You completed this module.</p>
                </div>
            </div>
            <div>
                <h2 className="text-primary text-display-sm font-thin p-sm">Congrats! You completed this module.</h2>
                <p className="text-body-md p-sm">You have now completed this module of the course, and you can now move
                    on to the next module.</p>
            </div>
        </article>
    )
}