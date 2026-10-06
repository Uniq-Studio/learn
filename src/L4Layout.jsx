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
                    heading: "Structure",
                    description: "Structure layouts vertically and horizontally using Column and Row."
                },
                {
                    heading: "Single Child or Multi-Child",
                    description: "Distinguish between single-child and multi-child layout widgets."
                },
                {
                    heading: "Spacing and Padding",
                    description: "Control spacing, alignment, and padding using mainAxisAlignment, crossAxisAlignment, and Padding/SizedBox."
                }
            ]} />

            <SubtitleTextList
                title="Column and Row"
                body={[
                    {text: "Column and Row are the primary layout widgets in Flutter. They are used to structure layouts vertically and horizontally. Column is used to structure layouts vertically, while Row is used to structure layouts horizontally."},
                    {text: "Column and Row can be nested to create complex layouts. For example, a Column can contain multiple Rows, and a Row can contain multiple Columns."},
                    {text: "Column and Row can also be used to create responsive layouts. For example, a Column can be used to create a responsive layout that adapts to different screen sizes."},
                    {text: "Have a look at the image of the Costa Coffee loyalty app. How many Column and Row widgets are used to create the layout?"}
                ]}
            />

            <SubtitleTextList
                title="App Bar"
                body={[
                    {text: "The App Bar is holding 2 widgets. The User greeting and the loyalty points. Its horizontal alignment so they have used a Row."},
                    {text: "The User greeting takes up most of the space, notice how the 2 text widgets are stacked vertically, so for this they have used a Column"},
                    {text: "The loyalty points are aligned to the right, they are all read from left to right, so it would be 2 nested rows (Why 2? maybe they want to move the free coffee somewhere else keeping it dynamic) with the Beans text being 2 text, one dynamically updating and the static /10"},
                    {text: "Lastly, they used another row for the free coffee, a text widget for the amount of free coffee and an image"},
                ]}
                content={
                    <ImageCard
                        src="img/course/l4/costa-coffee-app-bar.jpg"
                        alt="Costa Coffee App Bar"
                        caption="Costa Coffee App Bar, Greeting Aaron and diplaying that he has 1 free coffee."
                    />
                }
            />

            <SubtitleTextList
                title="Main Content"
                body={[
                    {text: "The body of the main app is very simple. They have a load of cards in a vertical list about latest news at Costa and rewards. So they are using a column here."},
                    {text: "Within the body of the cards, they are also simple. They are using Column, Image, Text then Text again."},
                    {text: "Sometimes, simplicity is key."}
                ]}
                content={
                    <ImageCard
                        src="img/course/l4/costa-coffee-body.jpg"
                        alt="Costa Coffee App Bar"
                        caption="Costa Coffee home screen displaying the latest news and rewards."
                    />
                }
            />

            <SubtitleTextList
                title="Bottom Navigation Bar"
                body={[
                    {text: "These is a lot of nesting of layout widgets. Firstly, they have used a column to contain 2 rows."},
                    {text: "The top Row hold 2 cards, which has a nested Row. This holds an Icon and Text widgets."},
                    {text: "The bottom row holds 5 buttons, they are made in a column. This hold an Icon at the top and Text at the bottom."}
                ]}
                content={
                    <ImageCard
                        src="img/course/l4/costa-coffee-nav-bar.jpg"
                        alt="Costa Coffee App Bar"
                        caption="Costa Coffee home screen displaying the latest news and rewards."
                    />
                }
            />

            <TitleText
                title="Guided Exercise"
                body="We will be making something simular to the bottom navigation bar."
            />

            <SubtitleTextList
                title="Creating the Widget"
                body={[
                    { text: "Copy the following code:" },
                    { text: "It will throw an error as we are not returning a Widget. We will build it up, this error is expected." },
                ]}
                content={
                    <CodeCard
                        code={`class _MetaData extends StatelessWidget {
  const _MetaData({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: return Widget here
  }
}`} />
                }
            />

            <SubtitleTextList
                title="Building the layout"
                body={[
                    { text: "As seen in the Nav Bar in the Costa Coffee App, we will create a layout with a Icon and a Text in a Column." },
                    { text: "So we will return a column. We will set the sizing to minimum and call Children" },
                ]}
                content={
                    <CodeCard
                        code={`return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
      ],
    );`} />
                }
            />

            <SubtitleTextList
                title="Adding Icon and Text"
                body={[
                    { text: "Now lets add the Icon Widget and a Text Widget" },
                    { text: "With the Icon, just like with the App Bar, we will set the color to primary and use the info_outline icon" },
                    { text: "With the Text widget we will set the color to primary and put a placeholder text." },
                    { text: "With the same way we call color, we will call textTheme rather than colorScheme to set the text to be titleMedium" },
                ]}
                content={
                    <CodeCard
                        code={`children: [
    Icon(
      Icons.info_outline,
      color: Theme.of(context).colorScheme.primary,
    ),
    Text(
      "Info",
      style: Theme.of(context).textTheme.titleMedium,
    ),
],`} />
                }
            />

            <SubtitleTextList
                title="More Widgets are needed!"
                body={[
                    { text: "Lets make another widget, it will be a Row for our MetaData." },
                    { text: "With the Row, we will set the mainAxisAlignment to spaceBetween, it will style it nicely in our card soon." },
                    { text: "We will call out MetaData 3 times." },
                    { text: "Then we will add it to our Hello World Card. Try to give it a try before looking at the code below." }
                ]}
                content={
                    <CodeCard
                        code={`class _MetaDataRow extends StatelessWidget {
  const _MetaDataRow({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        _MetaData(),
        _MetaData(),
        _MetaData()
      ],
    );
  }
}`} />
                }
            />

            <SubtitleTextList
                title="More Useful Widgets"
                body={[
                    { text: "Our MetaData widget is quiet useless displaying the same information." },
                    { text: "Lets make the icons and text changeable by passing them as parameters. We will do this by adding a constructor to our widget." },
                    { text: "It is also a bit cramped, so lets add 'const SizedBox(height: 8),' between Icon and Text." },
                    { text: "We done it before, so give it a try before looking at the code below." }
                ]}
                content={
                    <CodeCard
                        code={`class _MetaData extends StatelessWidget {
  final IconData icon;
  final String text;

  const _MetaData({
    required this.icon,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(
          icon,
          color: Theme.of(context).colorScheme.primary,
        ),
        const SizedBox(height: 8),
        Text(
          text,
          style: Theme.of(context).textTheme.titleMedium,
        ),
      ],
    );
  }
}`} />
                }
            />

            <SubtitleTextList
                title="Adding it to our Card"
                body={[
                    { text: "Now remove center from the card, and replace it with Column." },
                    { text: "Change child: to children: [] and call the text and the row" },
                    { text: "Add spacing between the two widgets" },
                    { text: "And update card to display info about a type of coffee! Give it a try before copying the code below!" }
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
          title: const Text("Uniq Coffee - Mocha Latte Information"),
          backgroundColor: Theme.of(context).colorScheme.primary,
          foregroundColor: Theme.of(context).colorScheme.onPrimary,
        ),
        body: const Center(
          child: 
              _MyCard(text: "Mocha Latte"),
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
        width: 450,
        height: 500,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              text,
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 60),
            const _MetaDataRow(),
          ],
        ),
      ),
    );
  }
}

class _MetaData extends StatelessWidget {
  final IconData icon;
  final String text;

  const _MetaData({
    required this.icon,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(
          icon,
          color: Theme.of(context).colorScheme.primary,
        ),
        const SizedBox(height: 8),
        Text(
          text,
          style: Theme.of(context).textTheme.titleSmall,
        ),
      ],
    );
  }
}

class _MetaDataRow extends StatelessWidget {
  const _MetaDataRow({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        _MetaData(icon: Icons.monetization_on, text: "4.59"),
        _MetaData(icon: Icons.coffee, text: "Semi-Skimmed"),
        _MetaData(icon: Icons.warning, text: "Contains Coco")
      ],
    );
  }
}`} />
                }
            />

            <ChallengeCard body={[
                {text: "Now we that we are displaying information about the coffee, we need to show what we are actually selling."},
                {text: "Your challenge is to research how to add an image to the card."},
                {text: "Display an image at the top of the card showing the coffee you have selected!."},
            ]} />
            <ImageCard
                src="img/course/l4/add-image.png"
                alt="Finalized coffee card"
                caption="Image of a Mocha Latte added to the card and modified the shape."
            />

            <CompletedCard />
        </article>
    )
}
