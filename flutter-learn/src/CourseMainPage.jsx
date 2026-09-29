import ProjectTitle from "./components/ProjectTitle.jsx"
import TitleText from "./components/TitleText.jsx";
import TitleList from "./components/TitleList.jsx"
import ContentCard from "./components/ContentCard.jsx"
import LearningResources from "./components/LearningResources.jsx"

export default function CourseMainPage(
    {onClickL1, onClickL2, onClickL3, onClickL4, onClickL5}
) {
    return(
        <div>
            <ProjectTitle subject="COMP10020 – INTERNET TECHNOLOGIES" title="Flutter" academic="Bennett, Paul; Hamilton, Aaron; Mian, Asim; Rafique, Iram" week="6"/>

            <TitleText title="Aim:" body="SAY WHAT THE AIM OF THIS LAB SESSION IS"/>

            <TitleList title="Key Objectives:" list={[
                {
                    heading: "1",
                    description: "1.1"
                },
                {
                    heading: "2",
                    description: "2.1"
                },
                {
                    heading: "3",
                    description: "3.1"
                }
            ]} />

            <TitleText title="Additional Notes:" body="SAY SOMETHING ABOUT ADDITIONAL NOTES."/>

            <ContentCard content={[
                {
                    src: "./src/img/logo/github_logo.webp",
                    alt: "GitHub Logo",
                    title: "Install & Set Up",
                    label: "Downloading Flutter in VS Code.",
                    onClick: onClickL1,
                },
                {
                    src: "./src/img/logo/codesandbox_logo.webp",
                    alt: "CodeSandbox Logo",
                    title: "Hello World",
                    label: "Hello, World! It's my first Flutter app.",
                    onClick: onClickL2,
                },
                {
                    src: "./src/img/logo/codesandbox_logo.webp",
                    alt: "CodeSandbox Logo",
                    title: "UI Hierarchy",
                    label: "Understand Flutter's UI Hierarchy.",
                    onClick: onClickL3,
                },
                {
                    src: "./src/img/logo/javascript_logo.webp",
                    alt: "JavaScript Logo",
                    title: "Layout Basic",
                    label: "Create a layout using Flutter's UI Hierarchy.",
                    onClick: onClickL4,
                },
                {
                    src: "./src/img/logo/javascript_logo.webp",
                    alt: "JavaScript Logo",
                    title: "Challenge",
                    label: "Challenge - List of Basic Recipes.",
                    onClick: onClickL5,
                }
            ]} />

            <LearningResources resources={[
                {
                    name: "Arrow function expressions",
                    author: "Mozilla",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
                },
                {
                    name: "map() filter() and reduce() in JavaScript",
                    author: "GeekForGeeks",
                    link: "https://www.geeksforgeeks.org/how-to-use-map-filter-and-reduce-in-javascript/"
                },
                {
                    name: "JavaScript Objects",
                    author: "W3Schools",
                    link: "https://www.w3schools.com/js/js_objects.asp"
                },
                {
                    name: "Working with objects",
                    author: "Mozilla",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
                },
                {
                    name: "Using classes",
                    author: "Mozilla",
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes"
                },
                {
                    name: "JavaScript Arrays",
                    author: "W3Schools",
                    link: "https://www.w3schools.com/js/js_arrays.asp"
                },
                {
                    name: "JavaScript Control Flow Statements",
                    author: "GeekForGeeks",
                    link: "https://www.geeksforgeeks.org/javascript/javascript-control-flow-statements/"
                },
                {
                    name: "JavaScript Array find()",
                    author: "W3Schools",
                    link: "https://www.w3schools.com/jsref/jsref_find.asp"
                },
            ]}/>
        </div>
    )
}