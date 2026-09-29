import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx"
import CodeCard from "./components/CodeCard.jsx";
import ChallengeCard from "./components/ChallengeCard.jsx";

export default function L5FunArr(
    {onClickBack}
) {

    return (
        <article>
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Functions & Arrow Function in JavaScript"
                subtitle="Functions are the building blocks of JavaScript code, allowing you to encapsulate code for reusability and organization. Understanding both traditional and arrow functions is crucial in React, as they are used extensively for component creation and handling events."
                onClickBack= {onClickBack}/>

            <SubtitleTextList
                title="Traditional Functions"
                body={[{text: "Defined using the function keyword. They have their own scope and can contain multiple lines of code."}]}
                content={
                    <CodeCard
                        code={
                            "hello = function () {\n  return \"Hello World!\";\n};"
                        }
                    />
                }
            />

            <SubtitleTextList
                title="Arrow Functions"
                body={[{text: "Introduced in ES6, offer a concise syntax and share the lexical this of their surrounding code."}]}
                content={
                    <CodeCard code={
                        "//Before arrow function\n" +
                        "hello = function () {\n" +
                        "  return \"Hello World!\";\n" +
                        "};\n\n" +
                        "//After arrow function\n" +
                        "hello = () => {\n" +
                        "  return \"Hello World!\";\n" +
                        "};"
                    } />
            }/>

            <TitleText title="Guided Exercise:" body="You will be giving a code sample, something you should have seen before and understand. We will be trying to convert it into an Arrow Function." />

            <SubtitleTextList
                title="Starting Code"
                body={[{text: "This is a function that will calculate the square of a number."}]}
                content={
                    <CodeCard code={
                        "function square(number) {\n" +
                        "  return number * number;\n" +
                        "}\n" +
                        "console.log(square(4)); // Outputs: 16"
                    }/>
                }
            />

            <SubtitleTextList
                title="Converted Code"
                body={[{text: "Notice how we done need to specify that its a function anymore and no longer need to specify that we need to return something as its now a constant that can be called."}]}
                content={
                    <CodeCard code={
                    "const square = (number) => number * number;\n" +
                    "console.log(square(4)); // Outputs: 16"
                    }/>
                }
            />

            <ChallengeCard body={[
                {text: "Create an arrow function that takes an array of numbers and returns a new array with each number doubled. "},
                {text: "Use the map method."},
                {text: "(more about map function in the Learning Resources section)"},
            ]} />

            <CompletedCard />

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
                }
            ]} />
        </article>
    )
}