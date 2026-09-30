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
                title="Hello World"
                subtitle="Understanding and modifying starter code."
                onClickBack={onClickBack} />

            <TitleText
                title="Aim:"
                body="The primary objective of this content is to read, understand and play with the starter code and view how Flutter is structured. The use of Chrome will help us test the code in real time with the use of Hot Restart and using it to view and amend any changes we wish to change to the current code to get formilar with the syntax of dart." />

            <TitleList title="Key Objectives:" list={[
                {
                    heading: "Debug",
                    description: "Run the current Flutter project and configuring it to target the Chrome Web Browser"
                },
                {
                    heading: "Hot Restart",
                    description: "Modifying the code and using Hot Restart to see what was changed and watch it update live"
                },
                {
                    heading: "Roles",
                    description: "Understanding the structure and the roles that we call like Main() runApp() within main.dart"
                }
            ]} />

            <SubtitleTextList
                title="Layout of main.dart"
                body={[
                    {text: "As you are learning your way around React, you will notice some similarities."},
                    {text: "Open lib/main.dart and remove the default boilerplate as we will be creating it. Copy in this boilerplate instead"},
                ]}
                content={
                    <CodeCard code={
                        "import 'package:flutter/material.dart';\n" +
                        "\n" +
                        "void main() {\n" +
                        "  runApp(\n" +
                        "    const MaterialApp(\n" +
                        "      home:\n" +
                        "    ),\n" +
                        "  );\n" +
                        "}"
                        } />
                }/>

            <TitleText title="Guided Exercise:" body="We will be saying Hello World in the center of the screen and then placing it within a box." />

            <SubtitleTextList
                title="Adding Scaffhold"
                body={[
                    {text: "Scaffold is an amazing bit of logic, it understands the current screens dimensions so you can have a top app bar, bottom nav bar while respecting devices that have notches."},
                    {text: "After home: we will add a scaffold and within the brackets we will add body: so we can start adding a widget"},
                    {text: "The widget we will add to the body will be Text, and it will hold the value 'Hello, World!'"},
                ]}
                content={
                    <CodeCard code={
                        "void main() {\n" +
                        "  runApp(\n" +
                        "    const MaterialApp(\n" +
                        "      home: Scaffold(\n" +
                        "        body: Text(\"Hello, World!\")\n" +
                        "      )\n" +
                        "    ),\n" +
                        "  );\n" +
                        "}"
                    }/>
                }
            />
            <ImageCard
                src={"src/img/course/l2/unanchored-hello-world.png"}
                alt="Chrome broser displaying hello world in the top left corner of the screen."
                caption="Flutter project displaying Hello World in the top left corner of the screen." />


            <ChallengeCard body={[
                {text:"Research more styling text and images by reviewing flutter documentation"},
                {text: "Update the image to be a fixed size so any resolution of photo can be used"},
                {text: "Update the text to be large and bold to use as a title for the card."},
            ]} />

            <CompletedCard />
        </article>
    )
}
