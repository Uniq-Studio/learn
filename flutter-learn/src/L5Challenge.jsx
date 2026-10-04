import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ImageCard from "./components/ImageCard.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx"
import TitleList from "./components/TitleList.jsx";
import CodeCard from "./components/CodeCard.jsx";
import ChallengeCard from "./components/ChallengeCard.jsx";

export default function L1Install(
    {onClickBack}
) {
    return(
        <article>
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Challenge"
                subtitle="Testing your knowlage and refineing your skills."
                onClickBack={onClickBack} />

            <TitleText
                title="Challenge Brief & Design Breakdown"
                body="The goal is to build up a responsive, styled recipe card componet centered in the browser window. Take insperation from the following images." />

            <ImageCard
                src={"src/img/course/l5/card1.png"}
                alt="App Bar that is themed with the Material color scheme."
                caption="App Bar that is themed with the Material color scheme" />

            <ImageCard
                src={"src/img/course/l5/card2.png"}
                alt="App Bar that is themed with the Material color scheme."
                caption="App Bar that is themed with the Material color scheme" />

            <ChallengeCard body={[
                {text: "Now its your turn, using all of the skills you have learnt its time to make your own card."},
                {text: "Try to make, in your own style, 3 cards of different recipes, coffees or even locations to visit"},
                {text: "Good Luck and happy coding."},
            ]} />

            <CompletedCard />
        </article>
    )
}
