export default function ImageCard(
    {src, alt, caption}
) {
    return (
        <div className="contentImgBox">
            <img src={src} alt={alt} className="contentImg"/>
            <figcaption className="text-label-sm font-thin p-0 m-0">{caption}</figcaption>
        </div>
    )
}