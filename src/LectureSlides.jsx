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

            <SubtitleTextList
                title="Slide 1 - Introduction"
                body={[
                    {text: "Today we will be exploring Flutter in today's lecture."},
                    {text: "We will be looking at how Flutter works and its system of Widgets it uses."},
                    {text: "We will be looking at advantages that Flutter can bring to you into your development."},
                    {text: "Lastly a look at the drawback that we have found, then a little explanation of today's lab"},
                    {text: "At the end we will be taking questions, we would love to answer them. Let's start!"},
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide1.webp"
                        alt="These are images of slides, if you require the use of accessiblity features, please contact the lecturer for slides."
                        caption="Slide 1 - Introduction"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 2 - Introduction To Flutter"
                body={[
                    {text: "A little introduction to Flutter. What is Flutter exactly?"},
                    {text: "Well, it was created by Google as a solution to a common challenge developers had. Multiple codebases for one app to run on different platforms, making some platforms have missing features and not feel like a single unified app."},
                    {text: "Flutter solves this by compiling the code for the platforms you need it on, no more missing features on Android or IOS. Same layout and design all at the same time. This also helps speed up development as well!"},
                    {text: "When Flutter launched, declarative UI development was just starting to take off. Unlike traditional UI builders where you manually stitch layouts together, a declarative approach means you simply tell Flutter what the interface should look like, and the framework handles the rest. This ensures your app maintains a consistent look and feel across any device or screen size."},
                    {text: "Google had built up Flutter with a rich ecosystem of customizable widgets that help developers build modern, responsive applications. First launched 2018, it has now matured framework and used by major companies, like BMW and Nubank. Google Pay uses Flutter as well."},
                    {text: "As you can see on the screen, Flutter empowers you to target a wide variety of platforms from one unified codebase."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide2.webp"
                        alt="Introduction To Flutter"
                        caption="Slide 2 - Introduction To Flutter"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 3 - Introduction to Dart"
                body={[
                    {text: "To understand Flutter, we need a quick introduction to Dart."},
                    {text: "Flutter runs on top of Dart, a programming language that was also developed by Google."},
                    {text: "From the beginning it was designed around being open-source, improving by the community of developers. Dart was created to be intuitive, easy to pick up and run efficiently across an array of devices."},
                    {text: "Fun Fact: Google created Dart originally with the ambition to replace JavaScript on the web. However, Google later shifted the project to, how it’s now, a multiplatform language."},
                    {text: "Because of the design, if you have experience with JavaScript , you might find the syntax familiar, especially if you have worked with the React Framework."},
                    {text: "But don’t worry, we won’t be diving into Dart today."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide3.webp"
                        alt="Introduction to Dart"
                        caption="Slide 3 - Introduction to Dart"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 4 - Relationship between Flutter & Dart"
                body={[
                    {text: "Flutter and Dart are a powerful combination, it’s what brings your app together!"},
                    {text: "Flutter is the declarative UI framework, providing all the widgets and tools and visual structure that you need your applications. While in the background, Dart is handing all of the business logic that the app needs to run and handle the core logic of the application you are creating."},
                    {text: "Both together makes your mutiplatform project run fast and smooth, allowing you to write one base code and deploy across mobile, web and server environments."},
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide4.webp"
                        alt="Relationship between Flutter & Dart"
                        caption="Slide 4 - Relationship between Flutter & Dart"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 5 - How Flutter Works"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide5.webp"
                        alt="How Flutter Works"
                        caption="Slide 5 - How Flutter Works"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 6 - Flutter's Widgets"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide6.webp"
                        alt="Flutter's Widgets"
                        caption="Slide 6 - Flutter's Widgets"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 7 - Stateless & Stateful Widget"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide7.webp"
                        alt="Stateless & Stateful Widget"
                        caption="Slide 7 - Stateless & Stateful Widget"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 8 - Code Example & Explination"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide8.webp"
                        alt="Code Example & Explination"
                        caption="Slide 8 - Code Example & Explination"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 9 - Flutter in a system (1/2)"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide9.webp"
                        alt="Flutter in a system, Part 1 of 2"
                        caption="Slide 9 - Flutter in a system, Part 1 of 2"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 10 - Flutter in a system (2/2)"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide10.webp"
                        alt="Flutter in a system, Part 2 of 2"
                        caption="Slide 10 - Flutter in a system, Part 2 of 2"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 11 - Advantages to Flutter"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide11.webp"
                        alt="Advantages to Flutter"
                        caption="Slide 11 - Advantages to Flutter"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 12 - Disadvantages to Flutter"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide12.webp"
                        alt="Disadvantages to Flutter"
                        caption="Slide 12 - Disadvantages to Flutter"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 13 - Summary"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide13.webp"
                        alt="Summary"
                        caption="Slide 13 - Summary"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 14 - Now it's your turn!"
                body={[{text: "Well you have already visited the page, once you have done reading over the slides, scroll back up to the top of the page and click on the '<Back' button to return back to the main page to start doing the lab."}]}
                content={
                    <ImageCard
                        src="img/slides/slide14.webp"
                        alt="Now it's your turn!"
                        caption="Slide 14 - Now it's your turn!"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 15 - Refrences"
                body={[{text: "Accessible through the Learning Resources at the bottom of this page."}]}
                content={
                    <ImageCard
                        src="img/slides/slide15.webp"
                        alt="Refrences, Accessable via the Learning Resourses below"
                        caption="Slide 15 - Refrences"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 16 - Questions?"
                body={[{text: "If you have any questions, please feel free to ask. Please contact your instructor or teaching assistant in class or online via email."}]}
                content={
                    <ImageCard
                        src="img/slides/slide16.webp"
                        alt="Questions?"
                        caption="Slide 16 - Questions?"
                    />
                }
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