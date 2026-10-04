import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ImageCard from "./components/ImageCard.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx";
import TitleList from "./components/TitleList.jsx";
import CodeCard from "./components/CodeCard.jsx";
import ChallengeCard from "./components/ChallengeCard.jsx";

export default function L2HelloWorld({ onClickBack }) {
    return (
        <article className="lesson-container">
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Hello World"
                subtitle="Understanding project structure and modifying starter code."
                onClickBack={onClickBack}
            />

            <TitleText
                title="Aim:"
                body="The primary objective of this lesson is to inspect, understand, and experiment with starter code to see how Flutter web applications are structured. Running the app in Google Chrome allows us to observe live updates using Hot Restart while getting familiar with Dart syntax."
            />

            <TitleList
                title="Key Objectives:"
                list={[
                    {
                        heading: "Launch & Target Chrome",
                        description: "Run the Flutter application and configure VS Code to target Google Chrome as the web browser runtime."
                    },
                    {
                        heading: "Master Hot Restart",
                        description: "Modify code in main.dart and use Hot Restart to observe instantaneous browser rendering."
                    },
                    {
                        heading: "Understand Entry Points",
                        description: "Learn the essential roles of main(), runApp(), MaterialApp, and Scaffold in a Flutter project."
                    },
                ]}
            />

            <SubtitleTextList
                title="Step One – Running the App on Chrome:"
                body={[
                    { text: "Before editing code, let's run the default application in your browser." },
                    { text: "At the bottom-right status bar of VS Code, click the device target and select 'Chrome (web)'." },
                    { text: "Press F5 or click 'Run > Start Debugging' to launch the app. A Chrome window will open displaying the default template." },
                ]}
            />

            <SubtitleTextList
                title="Step Two – Understanding the Layout of main.dart:"
                body={[
                    { text: "If you are familiar with React, you'll recognize similar component tree concepts in Flutter." },
                    { text: "Open lib/main.dart, delete the default counter boilerplate code, and replace it with this minimal structure:" },
                ]}
                content={
                    <CodeCard
                        code={`import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Text("Hello, World!"),
    ),
  );
}`}
                    />
                }
            />

            <TitleText
                title="Guided Exercise:"
                body="We will now build a proper screen frame using Scaffold and position 'Hello, World!' directly in the center of the viewport."
            />

            <SubtitleTextList
                title="Adding a Scaffold Frame:"
                body={[
                    { text: "Scaffold is a core layout widget that provides standard page structure (support for AppBars, background colors, and body areas)." },
                    { text: "Wrap the home property with a Scaffold widget and place the Text widget inside its body parameter:" },
                ]}
                content={
                    <CodeCard
                        code={`void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Text("Hello, World!"),
      ),
    ),
  );
}`}
                    />
                }
            />

            <ImageCard
                src="src/img/course/l2/unanchored-hello-world.png"
                alt="Chrome browser displaying unanchored text in the top left corner."
                caption="Text rendered in the top-left corner before adding layout alignment"
            />

            <SubtitleTextList
                title="Centering the Text Widget:"
                body={[
                    {
                        text: "Notice how the text sits in the top-left corner. In Flutter, alignment is controlled by wrapping content in layout widgets.",
                    },
                    {
                        text: "Wrap your Text widget inside a Center widget to position it in the middle of the browser screen:",
                    },
                ]}
                content={
                    <CodeCard
                        code={`home: Scaffold(
  body: Center(
    child: Text("Hello, World!"),
  ),
)`}
                    />
                }
            />

            <ChallengeCard
                body={[
                    { text: "1. Research Flutter's TextStyle class in the documentation." },
                    { text: "2. Add the style parameter to your Text widget: Text('Hello, World!', style: TextStyle(...))" },
                    { text: "3. Make the text larger (e.g., fontSize: 32) and bold (fontWeight: FontWeight.bold)." },
                ]}
            />

            <CompletedCard />
        </article>
    );
}