import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ImageCard from "./components/ImageCard.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx";
import TitleList from "./components/TitleList.jsx";
import CodeCard from "./components/CodeCard.jsx";
import ChallengeCard from "./components/ChallengeCard.jsx";

export default function L5Challenge({ onClickBack }) {
    return (
        <article className="lesson-container">
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Lesson 5: Recipe Card Challenge"
                subtitle="Testing your knowledge and refining your layout skills."
                onClickBack={onClickBack}
            />

            <TitleText
                title="Aim:"
                body="The primary objective of this final challenge is to combine everything you have learned—widget trees, StatelessWidgets, rows, columns, padding, and styling—to design and build structured card components rendered inside the browser window."
            />

            <TitleText
                title="Challenge Brief & Design Breakdown"
                body="Your goal is to build a styled, responsive card component centered in the browser viewport. Take inspiration from the layout examples below:"
            />

            <ImageCard
                src="src/img/course/l5/card1.png"
                alt="Example design of a recipe card showing a header banner, title, description, and metadata row."
                caption="Example Recipe Card layout with metadata row"
            />

            <ImageCard
                src="src/img/course/l5/card2.png"
                alt="Alternative card design variant showing different color schemes and icon layouts."
                caption="Alternative styled card design variant"
            />

            <SubtitleTextList
                title="Recommended Card Requirements:"
                body={[
                    { text: "To build a complete card component, aim to include the following widget structural features:" },
                ]}
                list={[
                    { task: "Outer Container: Use a Container or Card with rounded corners (BorderRadius) and subtle elevation/shadows." },
                    { task: "Header Image/Banner: Add an Image.network banner or styled placeholder Container with a prominent icon." },
                    { task: "Title & Body Text: Use Column padding with clear typography hierarchy (bold title, muted description)." },
                    { task: "Metadata Row: Build a bottom Row with icons and labels (e.g., prep time, cook time, rating, or price)." },
                ]}
            />

            <ChallengeCard
                body={[
                    { text: "1. Now it's your turn! Using all the skills you have learned across these 5 lessons, build your custom card component." },
                    { text: "2. Challenge: Instantiate your custom card widget 3 times using different data (e.g., 3 different recipes, coffee drinks, or travel destinations)." },
                    { text: "3. Tip: Place your 3 cards inside a Row, Column, or Wrap widget to display them neatly on screen." },
                    { text: "Good luck and happy coding!" },
                ]}
            />

            <CompletedCard />
        </article>
    );
}