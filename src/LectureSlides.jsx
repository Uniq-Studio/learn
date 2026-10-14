import ProjectTitle from "./components/ProjectTitle.jsx"
import TitleText from "./components/TitleText.jsx";
import TitleList from "./components/TitleList.jsx"
import ContentCard from "./components/ContentCard.jsx"
import LearningResources from "./components/LearningResources.jsx"
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ContentTitle from "./components/ContentTitle.jsx";
import ImageCard from "./components/ImageCard.jsx";

export default function LectureSlides(
    {onClickBack}
) {
    return(
        <article>
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Flutter Presitation"
                subtitle="View the presitation of Flutter"
                onClickBack={onClickBack} />

            <SubtitleTextList
                title="Slide 1 - Introduction"
                body={[
                    {text: "Today we will be exploring Flutter in today's lecture."},
                    {text: "We will be looking at how Flutter works and its system of Widgets it uses."},
                    {text: "We will be looking at advantages that Flutter can bring to you into your development."},
                    {text: "Lastly a look at the drawback that we have found, then a little explanation of today's lab"},
                    {text: "At the end we will be taking questions, we would love to answer them. Let's start!"},
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide1.webp"
                        alt="These are images of slides, if you require the use of accessiblity features, please contact the lecturer for slides."
                        caption="Slide 1 - Introduction"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 2 - Introduction To Flutter"
                body={[
                    {text: "A little introduction to Flutter. What is Flutter exactly?"},
                    {text: "Well, it was created by Google as a solution to a common challenge developers had. Multiple codebases for one app to run on different platforms, making some platforms have missing features and not feel like a single unified app."},
                    {text: "Flutter solves this by compiling the code for the platforms you need it on, no more missing features on Android or IOS. Same layout and design all at the same time. This also helps speed up development as well!"},
                    {text: "When Flutter launched, declarative UI development was just starting to take off. Unlike traditional UI builders where you manually stitch layouts together, a declarative approach means you simply tell Flutter what the interface should look like, and the framework handles the rest. This ensures your app maintains a consistent look and feel across any device or screen size."},
                    {text: "Google had built up Flutter with a rich ecosystem of customizable widgets that help developers build modern, responsive applications. First launched 2018, it has now matured framework and used by major companies, like BMW and Nubank. Google Pay uses Flutter as well."},
                    {text: "As you can see on the screen, Flutter empowers you to target a wide variety of platforms from one unified codebase."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide2.webp"
                        alt="Introduction To Flutter"
                        caption="Slide 2 - Introduction To Flutter"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 3 - Introduction to Dart"
                body={[
                    {text: "To understand Flutter, we need a quick introduction to Dart."},
                    {text: "Flutter runs on top of Dart, a programming language that was also developed by Google."},
                    {text: "From the beginning it was designed around being open-source, improving by the community of developers. Dart was created to be intuitive, easy to pick up and run efficiently across an array of devices."},
                    {text: "Fun Fact: Google created Dart originally with the ambition to replace JavaScript on the web. However, Google later shifted the project to, how it’s now, a multiplatform language."},
                    {text: "Because of the design, if you have experience with JavaScript , you might find the syntax familiar, especially if you have worked with the React Framework."},
                    {text: "But don’t worry, we won’t be diving into Dart today."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide3.webp"
                        alt="Introduction to Dart"
                        caption="Slide 3 - Introduction to Dart"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 4 - Relationship between Flutter & Dart"
                body={[
                    {text: "Flutter and Dart are a powerful combination, it’s what brings your app together!"},
                    {text: "Flutter is the declarative UI framework, providing all the widgets and tools and visual structure that you need your applications. While in the background, Dart is handing all of the business logic that the app needs to run and handle the core logic of the application you are creating."},
                    {text: "Both together makes your mutiplatform project run fast and smooth, allowing you to write one base code and deploy across mobile, web and server environments."},
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide4.webp"
                        alt="Relationship between Flutter & Dart"
                        caption="Slide 4 - Relationship between Flutter & Dart"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 5 - How Flutter Works"
                body={[
                    {text: "Let’s break down quickly on how Flutter works."},
                    {text: "At the very top is your application code, this is where you combine UI widgets with your apps business logic and state management. That is where all of that lives."},
                    {text: "Right underneath that is the Flutter framework. This part is where all of the widgets we had used live and all the other core components are. This also houses the Material and Cupertino themes, gesture detectors, text input and so much more. It takes all your widgets and creates them into the Widget Tree."},
                    {text: "Then we enter the engine layer. This is where the Dart runtime is hosted, text layout management and handling system events. This area does the heavy lifting of the rendering of the application."},
                    {text: "Below the engine sits the Embedder. The embedder is platform-specific—meaning Android, iOS, Windows, and macOS each have their own. It communicates directly with the host operating system to set up rendering surfaces, manage thread scheduling, pass touch inputs, and handle native accessibility events."},
                    {text: "Finally, the runner. This is run when you type flutter create. This build up your project from a shell project and get the environment ready for creating your new program. Just like when you start a new project on Android Studio or Xcode."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide5.webp"
                        alt="How Flutter Works"
                        caption="Slide 5 - How Flutter Works"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 6 - Flutter's Widgets"
                body={[
                    {text: "When building with Flutter, one thing to remember is that almost everything that you see and use in your application is a widgets. Widgets are the fundamental building block of any Flutter project you create."},
                    {text: "The framework comes packed with a large library of pre-built widgets out of the box. You have all the basic widgets for rendering text and images as well as helping creating layouts. All the pre-build widgets are also very customizable so your apps can be unique."},
                    {text: "Beyond just the built in widgets, there are massive community driven ecosystems alongside Googles first party packages. Every widgets are created to be highly customizable, flexible giving you a strong sense of freedom when creating the app."},
                    {text: "As you can see on the screen, there are some of the moist common widgets you’ll work with daily with every project you create."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide6.webp"
                        alt="Flutter's Widgets"
                        caption="Slide 6 - Flutter's Widgets"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 7 - Stateless & Stateful Widget"
                body={[
                    {text: "Now we have an understanding on widgets to build our UI, we will explain how they handle changes. IN Flutter there are to main states that your widgets can be; Stateless and Stateful."},
                    {text: "A Stateless Widget is immutable- meaning once the widget is built, it will never change. The contents remain fix regardless upon user interaction or app activity. A good example is the top app bar which might hold a static icon and text."},
                    {text: "On the other hand, you have stateful Widgets which are dynamic in nature. It can update its state and re-render its contents on the fly while the app is running. "},
                    {text: "This helps make the app interactive where you need it to be. For example, you could have a counter, text failed, and/or a toggle switch. In your app you may want details updating live to display weather information."},
                    {text: "Flutter efficiently rebuilds only the parts of the UI that need updating."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide7.webp"
                        alt="Stateless & Stateful Widget"
                        caption="Slide 7 - Stateless & Stateful Widget"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 8 - Code Example & Explination"
                body={[
                    {text: "Let’s look at code example below."},
                    {text: "On line one we’re importing Google’s Material Design package, which gives us all the core visual styling and widgets needed for the app."},
                    {text: "On line three, we have void main, which is the entry point for every Dart application."},
                    {text: "Inside main on line 4, runApp is a built in Flutter function that creates the root of the widget tree."},
                    {text: "Finally, you’ll see the home property, which acts as the default route or main screen of your app. In this case, it simply holds a Text widget displaying 'Hello Flutter'."},
                    {text: "Now, obviously, this is a very bare-bones starting point, but don’t be fooled as the lab will take you from this basic snippet to writing properly structured code. Trust me, once you get the hand of it it’s much easier than you think."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide8.webp"
                        alt="Code Example & Explination"
                        caption="Slide 8 - Code Example & Explination"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 9 - Flutter in a system (1/2)"
                body={[
                    {text: "Now we can have a look at how Flutter app connects to the wider world. An app is rarely offline based, it will use the cloud for more eleven up-to-date data."},
                    {text: "As you can see in this diagram, an Android/IOS app built with flutter communicates with a backend RST API to request information. When a request is made, the backend server retrieves the data from a database and sends a response back through the API."},
                    {text: "While Flutter handles the visual UI rendering on the device, Dart is working simultaneously in the background to handle the network requests, parse the incoming data, and prepare it for the app."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide9.webp"
                        alt="Flutter in a system, Part 1 of 2"
                        caption="Slide 9 - Flutter in a system, Part 1 of 2"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 10 - Flutter in a system (2/2)"
                body={[
                    {text: "So, in a real-world example. Image a company that has built an e-commerce app using Flutter to allow customers to browse an array of items available to buy."},
                    {text: "When the user open the app, they are on the Home Screen, the app initially displays a spinner in the center or a skeleton placeholder. Behind the scene, Dart is communicating to the backend server to reeve the current catalog of items."},
                    {text: "Once Dart had successfully populated its variables with the latest information, Flutter is designed to automatically detect the changes and update upon the changed data. This means that the stateful widgets will now dynamically update, transitioning from the skeleton placeholder with the recent catalog."},
                    {text: "This happens through out the app, all with the help of flutter and dart making the experience as seamless as possible."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide10.webp"
                        alt="Flutter in a system, Part 2 of 2"
                        caption="Slide 10 - Flutter in a system, Part 2 of 2"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 11 - Advantages to Flutter"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide11.webp"
                        alt="Advantages to Flutter"
                        caption="Slide 11 - Advantages to Flutter"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 12 - Disadvantages to Flutter"
                body={[{text: "SCRIPT NOTES TO BE ADDED HERE"}]}
                content={
                    <ImageCard
                        src="img/slides/slide12.webp"
                        alt="Disadvantages to Flutter"
                        caption="Slide 12 - Disadvantages to Flutter"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 13 - Summary"
                body={[
                    {text: "So much has been said in so little time so here are the key points that we have learned today."},
                    {text: "We have learnt that has a large multiplatform support and it’s always getting regularly updated by Google and we have a declarative UI builder."},
                    {text: "The easy to learn nature of Flutter helps you create beautiful, unique apps, and Dart supports you throughout helping you writing the code, making sure that you Flutter application runs fast and smoothly. it can be deployed wherever, on whatever, you need it."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide13.webp"
                        alt="Summary"
                        caption="Slide 13 - Summary"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 14 - Now it's your turn!"
                body={[
                    {text: "Now let’s take what you have learnt today and put it into practice."},
                    {text: "The lab guides you through everything, but at the end of each section there are some challenges, we won't give the answer to them, you need to do a bit of research and testing, the best way of learning!"},
                    {text: "At the end of the lab, you should be able to create reusable widgets and build up a card interface to display some information."},
                    {text: "We aren’t adding any logic as we are just focusing on Flutter itself, but that shouldn’t stop you from playing about and add some logic into it."},
                    {text: "Well you have already visited the page, once you have done reading over the slides, scroll back up to the top of the page and click on the '<Back' button to return back to the main page to start doing the lab."}
                ]}
                content={
                    <ImageCard
                        src="img/slides/slide14.webp"
                        alt="Now it's your turn!"
                        caption="Slide 14 - Now it's your turn!"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 15 - Refrences"
                body={[{text: "Accessible through the Learning Resources at the bottom of this page."}]}
                content={
                    <ImageCard
                        src="img/slides/slide15.webp"
                        alt="Refrences, Accessable via the Learning Resourses below"
                        caption="Slide 15 - Refrences"
                    />
                }
            />

            <SubtitleTextList
                title="Slide 16 - Questions?"
                body={[{text: "If you have any questions, please feel free to ask. Please contact your instructor or teaching assistant in class or online via email."}]}
                content={
                    <ImageCard
                        src="img/slides/slide16.webp"
                        alt="Questions?"
                        caption="Slide 16 - Questions?"
                    />
                }
            />


            <LearningResources resources={[
                {
                    name: "Dart documentation.",
                    author: "Dart",
                    link: "https://dart.dev/"
                },
                {
                    name: "Basic widgets",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/ui/widgets/basics"
                },
                {
                    name: "Building user interfaces with Flutter.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/ui"
                },
                {
                    name: "Common architecture concepts.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/app-architecture/concepts"
                },
                {
                    name: "Flutter architectural overview.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/resources/architectural-overview"
                },
                {
                    name: "Flutter documentation.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/"
                },
                {
                    name: "Flutter widget index.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/reference/widgets"
                },
                {
                    name: "How Flutter works.",
                    author: "Flutter",
                    link: "https://docs.flutter.dev/learn/pathway/how-flutter-works "
                },
            ]}/>
        </article>
    )
}