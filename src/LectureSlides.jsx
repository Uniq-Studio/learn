import ProjectTitle from "./components/ProjectTitle.jsx"
import TitleText from "./components/TitleText.jsx";
import TitleList from "./components/TitleList.jsx"
import ContentCard from "./components/ContentCard.jsx"
import LearningResources from "./components/LearningResources.jsx"
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ContentTitle from "./components/ContentTitle.jsx";
import ImageCard from "./components/ImageCard.jsx";

export default function LectureSlides(
    {onClickBack}
) {
    return(
        <article>
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Flutter Presitation"
                subtitle="View the presitation of Flutter"
                onClickBack={onClickBack} />

            <ImageCard
                src="img/slides/slide1.webp"
                alt="These are images of slides, if you require the use of accessiblity features, please contact the lecturer for slides."
                caption="Slide 1 - Introduction"
            />
            <ImageCard
                src="img/slides/slide2.webp"
                alt="Introduction To Flutter"
                caption="Slide 2 - Introduction To Flutter"
            />
            <ImageCard
                src="img/slides/slide3.webp"
                alt="Introduction to Dart"
                caption="Slide 3 - Introduction to Dart"
            />
            <ImageCard
                src="img/slides/slide4.webp"
                alt="Relationship between Flutter & Dart"
                caption="Slide 4 - Relationship between Flutter & Dart"
            />
            <ImageCard
                src="img/slides/slide5.webp"
                alt="How Flutter Works"
                caption="Slide 5 - How Flutter Works"
            />
            <ImageCard
                src="img/slides/slide6.webp"
                alt="Flutter's Widgets"
                caption="Slide 6 - Flutter's Widgets"
            />
            <ImageCard
                src="img/slides/slide7.webp"
                alt="Stateless & Stateful Widget"
                caption="Slide 7 - Stateless & Stateful Widget"
            />
            <ImageCard
                src="img/slides/slide8.webp"
                alt="Code Example & Explination"
                caption="Slide 8 - Code Example & Explination"
            />
            <ImageCard
                src="img/slides/slide9.webp"
                alt="Flutter in a system, Part 1 of 2"
                caption="Slide 9 - Flutter in a system, Part 1 of 2"
            />
            <ImageCard
                src="img/slides/slide10.webp"
                alt="Flutter in a system, Part 2 of 2"
                caption="Slide 10 - Flutter in a system, Part 2 of 2"
            />
            <ImageCard
                src="img/slides/slide11.webp"
                alt="Advantages to Flutter"
                caption="Slide 11 - Advantages to Flutter"
            />
            <ImageCard
                src="img/slides/slide12.webp"
                alt="Disadvantage to Flutter"
                caption="Slide 12 - Disadvantage to Flutter"
            />
            <ImageCard
                src="img/slides/slide13.webp"
                alt="Summary"
                caption="Slide 13 - Summary"
            />
            <ImageCard
                src="img/slides/slide14.webp"
                alt="Now it's your turn!"
                caption="Slide 14 - Now it's your turn!"
            />
            <ImageCard
                src="img/slides/slide15.webp"
                alt="Refrences, Accessable via the Learning Resourses below"
                caption="Slide 15 - Refrences, Accessable via the Learning Resourses below"
            />
            <ImageCard
                src="img/slides/slide16.webp"
                alt="Questions?"
                caption="Slide 16 - Questions?"
            />

            <LearningResources resources={[
                {
                    name: "Dart documentation.",
                    author: "Dart",
                    link: "https://dart.dev/"
                },
                {
                    name: "Basic widgets",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/ui/widgets/basics"
                },
                {
                    name: "Building user interfaces with Flutter.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/ui"
                },
                {
                    name: "Common architecture concepts.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/app-architecture/concepts"
                },
                {
                    name: "Flutter architectural overview.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/resources/architectural-overview"
                },
                {
                    name: "Flutter documentation.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/"
                },
                {
                    name: "Flutter widget index.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/reference/widgets"
                },
                {
                    name: "How Flutter works.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/learn/pathway/how-flutter-works "
                },
            ]}/>
        </article>
    )
}