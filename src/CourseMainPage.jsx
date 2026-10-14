import ProjectTitle from "./components/ProjectTitle.jsx"
import TitleText from "./components/TitleText.jsx";
import TitleList from "./components/TitleList.jsx"
import ContentCard from "./components/ContentCard.jsx"
import LearningResources from "./components/LearningResources.jsx"
import SubtitleTextList from "./components/SubtitleTextList.jsx";

export default function CourseMainPage(
    {onClickL1, onClickL2, onClickL3, onClickL4, onClickL5, onClickSlides}
) {
    return(
        <article>
            <ProjectTitle subject="COMP10020 – INTERNET TECHNOLOGIES" title="Flutter Basics" academic="Aaron Hamilton, Asim Mian, Iram Rafique, Paul Bennett" week="6"/>

            <SubtitleTextList
                title="Lecture:"
                body={[{text: "If you were not present in the lecture, before attempting this lab session, please review the lecture slides."}]}
                content={
                    <a onClick={onClickSlides} href="#!"><p className="bubble m-lg">View Lecture Slides</p></a>
                }
            />

            <TitleText title="Aim:" body="The primary objective of this lab session is to learn the fundimentals and understanding of Flutter.
             We will focus on the basics of Flutter, including its UI hierarchy, layout, and widgets. You will learn how to create a layout
              using Flutter's UI Hierarchy."/>

            <TitleList title="Key Objectives:" list={[
                {
                    heading: "Environment Setup",
                    description: "Successfully set up Visual Studio Code and Installing Flutter along side. Configuring Flutter to create web apps and learn the Flutter development environment to build and run apps across target platforms."
                },
                {
                    heading: "Core Fundamentals and Widgets",
                    description: "Understand Flutter's \"Everything is a Widget\" and break down user interfaces down to help create dynamic and using the UI Hierarchy to create responsive applications."
                },
                {
                    heading: "Practical Component Assembly",
                    description: "Apply layout principles, styling properties, and visual hierarchies to build clean, real-world user interface components from scratch."
                }
            ]} />

            <TitleText title="Additional Notes:" body="Most of the practical sections include a brief theoretical overview of the topic, complemented by guided exercises. To engage with these exercises, you can copy and paste them into your code editor and observe the outcomes. Additionally, at the end of certain sections, you'll find a code challenge related to that specific topic. Complete these challenges and feel free to approach the Academics with any questions you may have."/>

            <ContentCard content={[
                {
                    src: "img/logo/code_logo.webp",
                    alt: "Visual Studio Logo",
                    title: "Install & Set Up",
                    label: "Downloading Flutter in Visual Studio Code.",
                    onClick: onClickL1,
                },
                {
                    src: "img/logo/flutter_logo.webp",
                    alt: "Flutter Logo",
                    title: "Hello World",
                    label: "Hello, World! It's my first Flutter app.",
                    onClick: onClickL2,
                },
                {
                    src: "img/logo/flutter_logo.webp",
                    alt: "Flutter Logo",
                    title: "UI Hierarchy",
                    label: "Understand Flutter's UI Hierarchy.",
                    onClick: onClickL3,
                },
                {
                    src: "img/logo/flutter_logo.webp",
                    alt: "Flutter Logo",
                    title: "Layout Basic",
                    label: "Create a layout using Flutter's UI Hierarchy.",
                    onClick: onClickL4,
                },
                {
                    src: "img/logo/flutter_logo.webp",
                    alt: "Flutter Logo",
                    title: "Challenge",
                    label: "Challenge - List of Basic Recipes.",
                    onClick: onClickL5,
                }
            ]} />

            <LearningResources resources={[
                {
                    name: "Install Flutter using VS Code",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/install/with-vs-code"
                },
                {
                    name: "Flutter",
                    author: "Visual Studio Marketplace",
                    link: "https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter"
                },
                {
                    name: "Flutter SDK",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/install/manual"
                },
                {
                    name: "Hot Reload",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/tools/hot-reload"
                },
                {
                    name: "Text Widget",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/ui/widgets/text"
                },
                {
                    name: "UI design & styling",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/ui/accessibility/ui-design-and-styling"
                },
                {
                    name: "Introduction to declarative UI",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/flutter-for/declarative"
                },
                {
                    name: "Widget catalog",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/ui/widgets"
                },
                {
                    name: "What is a Widget in Flutter",
                    author: "Stack Overflow",
                    link: "https://stackoverflow.com/questions/50958238/what-is-a-widget-in-flutter"
                },
                {
                    name: "What is a Widget in Flutter",
                    author: "Stack Overflow",
                    link: "https://stackoverflow.com/questions/50958238/what-is-a-widget-in-flutter"
                },
                {
                    name: "Flutter Layout — Complete Guide",
                    author: "Nayden Gochev",
                    link: "https://dev.to/gochev/flutter-layout-complete-guide-58fo"
                },
                {
                    name: "Flutter layouts guide: Margins and padding",
                    author: "Ivy Walobwa",
                    link: "https://blog.logrocket.com/flutter-layouts-guide-margins-padding/"
                },
                {
                    name: "Adding assets and images",
                    author: "Flutter Docs",
                    link: "https://docs.flutter.dev/ui/assets/assets-and-images"
                }
            ]}/>
        </article>
    )
}