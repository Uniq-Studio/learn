import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ImageCard from "./components/ImageCard.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx";
import TitleList from "./components/TitleList.jsx";

export default function L1Install({ onClickBack, onClickNext }) {
    return (
        <article className="lesson-container">
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Installing Flutter into Visual Studio Code"
                urgent="You do not require a fresh installation if you already have a working setup. You are also free to use any other compatible IDE (e.g., Android Studio or IntelliJ)."
                onClickBack={onClickBack}
            />

            <TitleText
                title="Aim:"
                body="The primary objective of this lesson is to set up Visual Studio Code with the Flutter SDK. By the end of this session, you will configure Flutter to build and run web applications directly inside your browser."
            />

            <TitleList
                title="Key Objectives:"
                list={[
                    {
                        heading: "Configure IDE & Environment",
                        description: "Ensure Visual Studio Code and necessary system prerequisites are installed and properly configured."
                    },
                    {
                        heading: "Install & Connect Flutter SDK",
                        description: "Install the official Flutter extension for VS Code and download/link the Flutter SDK to your environment."
                    },
                    {
                        heading: "Verify Web Target & Create Project",
                        description: "Initialize a new Flutter Web application using the VS Code Command Palette and target Chrome for browser development."
                    },
                ]}
            />

            <SubtitleTextList
                title="Step One – Install Prerequisites (Windows):"
                body={[
                    { text: "To ensure proper functioning, Flutter requires Git and VS Code. Administrative access is required to install these applications on your system." },
                    { text: "Follow these steps if you are using WINDOWS:" },
                ]}
                list={[
                    { task: "Go to the official Git for Windows installer: https://git-scm.com/install/windows" },
                    { task: "Click 'Click here to download' to get the latest version of Git." },
                    { task: "Run the downloaded installer and follow the standard installation wizard." },
                    { task: "Go to the Visual Studio Code download page: https://code.visualstudio.com" },
                    { task: "Select 'Download for Windows' and complete the installation wizard." },
                ]}
            />

            <SubtitleTextList
                title="Step One – Install Prerequisites (macOS):"
                body={[
                    { text: "To ensure proper functioning, Flutter requires Xcode command-line tools and VS Code." },
                    { text: "Follow these steps if you are using MACOS:" },
                ]}
                list={[
                    { task: "Launch the Terminal application." },
                    { task: "Enter the command: xcode-select --install" },
                    { task: "Enter your administrator password when prompted and accept the license terms." },
                    { task: "Go to the Visual Studio Code download page: https://code.visualstudio.com" },
                    { task: "Select 'Download for macOS', open the downloaded zip file, and move Visual Studio Code into your Applications folder." },
                ]}
            />

            <SubtitleTextList
                title="Step Two – Install Flutter Extension in VS Code:"
                body={[
                    { text: "Launch Visual Studio Code and complete the first-time setup if prompted." },
                    { text: "Open Extensions by clicking the square icon on the left sidebar (or press Ctrl+Shift+X / Cmd+Shift+X)." },
                    { text: "Search for 'Flutter' in the Marketplace search bar and click 'Install'." },
                ]}
            />

            <ImageCard
                src="img/course/l1/visual-studio-code-flutter-install.png"
                alt="Visual Studio Code Marketplace search results showing the official Flutter extension."
                caption="VS Code Marketplace screen showing the Flutter extension search"
            />

            <SubtitleTextList
                title="Step Three – Create a New Flutter Web Project:"
                body={[
                    { text: "Open the Explorer view on the left sidebar, click 'Open Folder', and create a dedicated folder for your Flutter projects." },
                    { text: "Open the Command Palette from the top menu: View > Command Palette... (or press Ctrl+Shift+P / Cmd+Shift+P)." },
                    { text: "Type 'Flutter' into the Command Palette and select 'Flutter: New Project'." },
                    { text: "Select 'Application' (or 'Empty Application'), choose your newly created folder, and name your project 'my_app'." },
                    { text: "When prompted to select target platforms, ensure 'Web' is checked and click 'OK'." },
                ]}
            />

            <ImageCard
                src="img/course/l1/command-palette.png"
                alt="VS Code menu bar showing View selected with Command Palette highlighted."
                caption="Opening the Command Palette in VS Code"
            />

            <ImageCard
                src="img/course/l1/new-project.png"
                alt="Selecting 'Flutter: New Project' from the Command Palette search results."
                caption="Creating a new Flutter project via the Command Palette"
            />

            <SubtitleTextList
                title="Step Four – Install & Link the Flutter SDK:"
                body={[
                    { text: "If VS Code does not detect a Flutter SDK on your system, a popup notification will appear asking you to locate or download it." },
                    { text: "Click 'Download SDK', choose a location on your drive (e.g., C:\\flutter or ~/development/flutter), and allow VS Code to configure your system PATH." },
                    { text: "Once the download completes, VS Code will finish generating your project files."},
                    { text: "You are now ready to write and execute your first Flutter Web app!"},
                ]}
            />

            <ImageCard
                src="img/course/l1/download-sdk.png"
                alt="VS Code prompt requesting to download or locate the Flutter SDK."
                caption="VS Code requesting to download the Flutter SDK"
            />

            <CompletedCard onClick={onClickNext}/>
        </article>
    );
}