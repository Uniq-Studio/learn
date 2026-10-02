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
                title="Layout Basics"
                subtitle="Placement is key."
                onClickBack={onClickBack} />

            <TitleText
                title="Aim:"
                body="The primary objective of this content is to read, understand and play with the starter code and view how Flutter is structured. The use of Chrome will help us test the code in real time with the use of Hot Restart and using it to view and amend any changes we wish to change to the current code to get formilar with the syntax of dart." />

            <TitleList title="Key Objectives:" list={[
                {
                    heading: "Single Child or Multi-Child",
                    description: "Distinguish between single-child and multi-child layout widgets."
                },
                {
                    heading: "Structure",
                    description: "Structure layouts vertically and horizontally using Column and Row."
                },
                {
                    heading: "Spacing and Padding",
                    description: "Control spacing, alignment, and padding using mainAxisAlignment, crossAxisAlignment, and Padding/SizedBox."
                }
            ]} />



            <ChallengeCard body={[
                {text:"Research Text Styles in Flutter."},
                {text: "Within the Text widget add the parameter style:"},
                {text: "Update the text to be large and bold to use as a title."},
            ]} />

            <CompletedCard />
        </article>
    )
}
