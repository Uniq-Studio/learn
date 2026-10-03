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
                title="UI Hierarchy"
                subtitle="Everything is a widget?"
                onClickBack={onClickBack} />

            <TitleText
                title="Aim:"
                body="The primary objective of this content is to get more confitable writing more Declarative UI. While learning the User Interface Hierarch that exsites within Flutter. We will also be extracting code and converting them into widgets and understanding the Parant child relationship and how it will effect the UI as they interact with each other." />

            <TitleList title="Key Objectives:" list={[
                {
                    heading: "Widgets",
                    description: "Understand Flutter's core model of \"Everything is a widget\"."
                },
                {
                    heading: "Parent-Child Relationship",
                    description: "Learn how parent-child relationships form a visual hierarchy, known as the Widget Tree."
                },
                {
                    heading: "Custom StatelessWidgets",
                    description: "Understanding the structure and the roles that we call like Main() runApp() within main.dart"
                }
            ]} />

            <SubtitleTextList
                title="What are widget?"
                body={[{text: "In Flutter, Widgets are a building block. Everything is a widget, every piece of the user interface; text, button, icon, even padding. nested within each other to help build the user interface. This is call declarative UI, you dont have a interface to build up your interface but you type out exactly what you want Flutter to build for you."}]} />

            <SubtitleTextList
                title="Parent-Child Relationship"
                body={[
                    {text: "In Flutter, Widgets are following a rule set that follows. Parents will pass down the constraints down through the children. For example. if you have a a view that has a slight radius, the child image will also have the radius."},
                    {text: "The child does also pass parameters up to the parent. The children can pass up sizing to the parent unless if the parent has a restraint on the size."},
                ]} />

            <TitleText title="Guided Exercise:" body="We will be starting to break down our project into Widgets, so we can reuse the same elements and even have diffrent layout if we chose to cchnage the layout without heavy modification of code." />

            <SubtitleTextList
                title="Moving the current code into its own Widget"
                body={[
                    {text: "Use the boilerplate to move your current code out of the void main() and place it it in its own widget."},
                    {text: "Move your code from runApp into the boilerplate, replace const MaterialApp to return MaterialApp"}
                ]}
                content={
                    <CodeCard
                        code={
                            "void main() {\n" +
                            "  runApp(const MyApp());\n" +
                            "}\n\n"+
                            "class MyApp extends StatelessWidget {\n" +
                            "  const MyApp({super.key});\n" +
                            "\n" +
                            "  @override\n" +
                            "  Widget build(BuildContext context) {\n" +
                            "     // PLACE YOUR CODE HERE\n" +
                            "   }\n" +
                            "}"
                        }
                    />
                } />

            <SubtitleTextList
                title="Adding a Card Around our text"
                body={[
                    {text: "We can see how the child to parent relationship works. We will be adding a filled card and a SizedBox and changing the size of the box and waiting the parent card get effected by the sizing."},
                    {text: "Wrap the Hello, World! text in a Card.filled and set the text as the child. Now wrap the Text again but with a Sized Box and setting width to 250 and height to 300 and the text as the child."}
                ]}
                content={
                    <CodeCard
                        code={
                            "Center(\n" +
                            "   child: Card.filled(\n" +
                            "       child: SizedBox(\n" +
                            "           width: 250,\n" +
                            "           height: 300,\n" +
                            "           child: Text(\"Hello, World!\")\n" +
                            "       )\n" +
                            "   )\n" +
                            ")"
                        }
                    />
                } />

            <ImageCard
                src={"src/img/course/l3/sized-card.png"}
                alt="Basic card with hello world in the top left corner of the card."
                caption="Sized Box with a unpositioned text child." />


            <SubtitleTextList
                title="Let's add an App Bar"
                body={[
                    {text: "Scaffold have a preset area for AppBars."},
                    {text: "In the Scaffold, above home, add an parameter for appBar: and call the AppBar widget."},
                    {text: "Add a title parameter and call the text widget and type 'My App' or whatever you please."},
                    {text: "We will also add backgroundColor and foregroundColor "}
                ]}
                content={
                    <CodeCard
                        code={
                            "appBar: AppBar(\n" +
                            "   title: Text(\"My App\"),\n" +
                            "   backgroundColor: Theme.of(context).colorScheme.primary,\n" +
                            "   foregroundColor: Theme.of(context).colorScheme.onPrimary,\n" +
                            "),"
                        }
                    />
                }
            />

            <ImageCard
                src={"src/img/course/l3/app-bar.png"}
                alt="App Bar that is themed with the Material color scheme."
                caption="App Bar that is themed with the Material color scheme" />

            <SubtitleTextList
                title="Lastly, Making the card a widget itself"
                body={[
                    {text: "What if we want to use this card multiple time? So lets make it a widget!"},
                    {text: "Use the boilerplate given to help us start building our widget, all we need to do is move the card into the widget."},
                    {text: "We will also make the Hello, World! text changeable"},
                    {text: "Then we will call the card! So copy the code and add the card ald call the widget."}
                ]}
                content={
                    <CodeCard
                        code={
                            "class _MyCard extends StatelessWidget {\n" +
                            "  final String text;\n" +
                            "\n" +
                            "  const _MyCard({\n" +
                            "    required this.text\n" +
                            "  });\n" +
                            "\n" +
                            "  @override\n" +
                            "  Widget build(BuildContext context) {\n" +
                            "    return \n" +
                            "       //Add the card here\n" +
                            "  }\n" +
                            "}"
                        }
                    />
                } />

            <SubtitleTextList
                title="That was a lot of Refactoring."
                body={[
                    {text: "That was a lot to learn in this one lesson, if you got loss and your code stopped working, try looking at it with the code below."},
                    {text: "You dont need to check if your code is working, but if its not, just copy this snippet and lets move on to the next course!"}
                ]}
                content={
                    <CodeCard
                        code={
                            "import 'package:flutter/material.dart';\n" +
                            "\n" +
                            "void main() {\n" +
                            "  runApp(const MyApp());\n" +
                            "}\n" +
                            "\n" +
                            "class MyApp extends StatelessWidget {\n" +
                            "  const MyApp({super.key});\n" +
                            "\n" +
                            "  @override\n" +
                            "  Widget build(BuildContext context) {\n" +
                            "    return MaterialApp(\n" +
                            "      home: Scaffold(\n" +
                            "        appBar: AppBar( \n" +
                            "          title: Text(\"My App\"),           \n" +
                            "          backgroundColor: Theme.of(context).colorScheme.primary,\n" +
                            "          foregroundColor: Theme.of(context).colorScheme.onPrimary,       \n" +
                            "        ),\n" +
                            "        body: Center(\n" +
                            "          child: _MyCard(text: \"Hello, World!\",)\n" +
                            "        )\n" +
                            "      )\n" +
                            "    );\n" +
                            "   }\n" +
                            "}\n" +
                            "\n" +
                            "class _MyCard extends StatelessWidget {\n" +
                            "  final String text;\n" +
                            "\n" +
                            "  const _MyCard({\n" +
                            "    required this.text\n" +
                            "  });\n" +
                            "\n" +
                            "  @override\n" +
                            "  Widget build(BuildContext context) {\n" +
                            "    return \n" +
                            "      Card.filled(\n" +
                            "        child: SizedBox(\n" +
                            "          width: 250,\n" +
                            "          height: 300,\n" +
                            "          child: \n" +
                            "            Center(\n" +
                            "              child: Text(text)\n" +
                            "            )\n" +
                            "        )\n" +
                            "      );\n" +
                            "  }\n" +
                            "}"
                        }
                    />
                } />

            <ImageCard
                src={"src/img/course/l3/app-so-far.png"}
                alt="App with a top bar saying myt app, with a card in the center saying Hello World!"
                caption="App with an app bar and custom card" />

            <ChallengeCard body={[
                {text:"Remember what I said about Child parent relationship?"},
                {text: "What do you think will happen to our card we just made if we made the text way larger than the card?"},
                {text: "Will the text crop or will the card expand to fit the text within? Give it a try."},
            ]} />

            <CompletedCard />
        </article>
    )
}
