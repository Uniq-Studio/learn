import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ImageCard from "./components/ImageCard.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx";
import TitleList from "./components/TitleList.jsx";
import CodeCard from "./components/CodeCard.jsx";
import ChallengeCard from "./components/ChallengeCard.jsx";

export default function L3UIHierarchy({ onClickBack }) {
    return (
        <article className="lesson-container">
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="UI Hierarchy"
                subtitle="Understanding Flutter's Widget Tree and 'Everything is a Widget'"
                onClickBack={onClickBack}
            />

            <TitleText
                title="Aim:"
                body="The primary objective of this lesson is to become comfortable writing Declarative UI while exploring Flutter's visual hierarchy (the Widget Tree). We will extract UI elements into custom reusable StatelessWidget components and examine how parent-child relationships dictate layout constraints on screen."
            />

            <TitleList
                title="Key Objectives:"
                list={[
                    {
                        heading: "Core Mental Model",
                        description: 'Understand Flutter\'s declarative paradigm: "Everything is a Widget" (structural, visual, and layout wrappers).',
                    },
                    {
                        heading: "Parent-Child Relationships",
                        description: "Learn how constraints flow DOWN the widget tree from parent to child, and how sizes flow UP from child to parent.",
                    },
                    {
                        heading: "Component Extraction",
                        description: "Refactor inline UI code into custom StatelessWidget classes that accept dynamic arguments.",
                    },
                ]}
            />

            <SubtitleTextList
                title="What is a Widget?"
                body={[
                    { text: "In Flutter, widgets are the fundamental building blocks of your application. Every visual element (buttons, text, icons) and every layout constraint (padding, centering, sizing) is a widget." },
                    { text: "This is known as Declarative UI. Instead of imperatively mutating UI elements (like manipulating DOM nodes directly in JavaScript), you describe what the UI should look like for its current state, and Flutter handles rendering it efficiently." },
                ]}
            />

            <SubtitleTextList
                title="The Parent-Child Layout Rule:"
                body={[
                    { text: "Flutter follows a strict rulebook when calculating layout positions on screen:" },
                    { text: "1. Constraints go DOWN: The parent widget gives its child a set of boundary rules (e.g., 'You can be between 0 and 300 pixels wide')." },
                    { text: "2. Sizes go UP: The child determines its own size based on its content within those constraints and tells its parent." },
                    { text: "3. Parents decide POSITION: The parent places the child inside its coordinate space (e.g., Center places its child right in the middle)." },
                ]}
            />

            <TitleText
                title="Guided Exercise:"
                body="We will now refactor our code into modular widgets so we can reuse elements cleanly across our app without cluttering main()."
            />

            <SubtitleTextList
                title="Step 1 – Extracting MyApp into a StatelessWidget:"
                body={[
                    { text: "Instead of writing our entire UI inline inside runApp(), we create a custom StatelessWidget class named MyApp." },
                    { text: "Replace the contents of lib/main.dart with the boilerplate below:" },
                ]}
                content={
                    <CodeCard
                        code={`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text("Hello, World!"),
        ),
      ),
    );
  }
}`}
                    />
                }
            />

            <SubtitleTextList
                title="Step 2 – Wrapping Content in a Sized Card:"
                body={[
                    { text: "To observe parent-child sizing in action, we'll wrap our Text widget inside a Card.filled widget and give it explicit dimensions using a SizedBox." },
                    { text: "Update the body parameter of your Scaffold as follows:" },
                ]}
                content={
                    <CodeCard
                        code={`body: Center(
  child: Card.filled(
    child: SizedBox(
      width: 250,
      height: 300,
      child: Center(
        child: Text("Hello, World!"),
      ),
    ),
  ),
)`}
                    />
                }
            />

            <ImageCard
                src="src/img/course/l3/sized-card.png"
                alt="A filled card with fixed dimensions displaying Hello World centered inside."
                caption="A filled Card constrained by a 250x300 SizedBox"
            />

            <SubtitleTextList
                title="Step 3 – Adding a Themed AppBar:"
                body={[
                    { text: "Scaffold provides a dedicated appBar slot for top navigation bars." },
                    { text: "Add an AppBar widget to your Scaffold, using the Material Theme colors defined by the app context:" },
                ]}
                content={
                    <CodeCard
                        code={`appBar: AppBar(
  title: const Text("My App"),
  backgroundColor: Theme.of(context).colorScheme.primary,
  foregroundColor: Theme.of(context).colorScheme.onPrimary,
),`}
                    />
                }
            />

            <ImageCard
                src="src/img/course/l3/app-bar.png"
                alt="Top AppBar rendered using primary theme colors."
                caption="Top AppBar styled with Material 3 theme colors"
            />

            <SubtitleTextList
                title="Step 4 – Extracting a Custom Card Component:"
                body={[
                    { text: "What if we want to display this card multiple times with different text? Let's turn it into a custom reusable widget named _MyCard." },
                    { text: "Create a new class definition at the bottom of lib/main.dart that accepts a required String text parameter:" },
                ]}
                content={
                    <CodeCard
                        code={`class _MyCard extends StatelessWidget {
  final String text;

  const _MyCard({
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Card.filled(
      child: SizedBox(
        width: 250,
        height: 300,
        child: Center(
          child: Text(text),
        ),
      ),
    );
  }
}`}
                    />
                }
            />

            <SubtitleTextList
                title="Consolidated Code Checkpoint:"
                body={[
                    { text: "If your code ran into formatting or syntax errors during refactoring, compare your lib/main.dart file against this complete working snippet:" },
                ]}
                content={
                    <CodeCard
                        code={`import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text("My App"),
          backgroundColor: Theme.of(context).colorScheme.primary,
          foregroundColor: Theme.of(context).colorScheme.onPrimary,
        ),
        body: const Center(
          child: _MyCard(text: "Hello, World!"),
        ),
      ),
    );
  }
}

class _MyCard extends StatelessWidget {
  final String text;

  const _MyCard({
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Card.filled(
      child: SizedBox(
        width: 250,
        height: 300,
        child: Center(
          child: Text(text),
        ),
      ),
    );
  }
}`}
                    />
                }
            />

            <ImageCard
                src="src/img/course/l3/app-so-far.png"
                alt="Final screen rendering a themed app bar and a custom card widget centered in the body."
                caption="Complete UI rendered with custom _MyCard widget"
            />

            <ChallengeCard
                body={[
                    { text: "1. Remember how constraints pass down from parent to child?" },
                    { text: "2. Experiment: Increase the fontSize inside _MyCard to a huge value (e.g., fontSize: 48) or make the text string extremely long." },
                    { text: "3. Observe: Does the card automatically expand, or does the text overflow/clip inside the fixed 250x300 SizedBox?" },
                ]}
            />

            <CompletedCard />
        </article>
    );
}