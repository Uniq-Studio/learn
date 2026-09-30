import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ImageCard from "./components/ImageCard.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx"
import TitleList from "./components/TitleList.jsx";

export default function L1Install(
    {onClickBack}
) {
    return(
        <article>
            <ContentTitle
                subject="COMP10020 – INTERNET TECHNOLOGIES"
                title="Installing Flutter into Visual Studio Code"
                urgent="You do not require a fresh instillation and should work with your current set up. You are not limited to VSCode and free to
                 use other compatable IDE."
                onClickBack={onClickBack} />

            <TitleText
                title="Aim:"
                body="The primary objective of this content is to establish an instance of Visual Studio Code running with the latest version of
                Flutter. Subsequently, we will configure Flutter for the utilization of this content on create application hosted within the browser." />

            <TitleList title="Key Objectives:" list={[
                {
                    heading: "Visual Studio Code installation",
                    description: "Ensuring that you have a basic installation of Visual Studio Code on the device you are currently developing on."
                },
                {
                    heading: "Installing Flutter and Configuring",
                    description: "Installing the Flutter extension to Visual Studio Code running with the latest version and configuring VS Code to have the correct Command Palette."
                }
            ]} />

            <SubtitleTextList
                title="Step One – Install Prerequisite (Windows):"
                body={[
                    {text: "To ensure the proper functioning of Flutter, we must install certain prerequisite software. As a developer, it is imperative that you have this software packages installed on your system."},
                    {text: "This guide is specifically tailored for WINDOWS USERS."},
                    {text: "The necessary software for installation includes Git for Windows and Visual Studio Code. Administrative access is required for the installation of these programs."}
                ]}
                list={[
                    {task: "Proceed to the following link: https://git-scm.com/install/windows"},
                    {task: "Select “Click here to download” and download the latest version of Git to your system."},
                    {task: "Follow the on-screen instructions provided by the Git installation wizard."},
                    {task: "Once the installation is complete, proceed to the following link: https://code.visualstudio.com"},
                    {task: "Select “Download for Windows” and follow the on-screen instructions provided by the Visual Studio Code installation wizard."},
                ]}
            />

            <SubtitleTextList
                title="Step One – Install Prerequisite (macOS):"
                body={[
                    {text: "To ensure the proper functioning of Flutter, we must install certain prerequisite software. As a developer, it is imperative that you have this software packages installed on your system."},
                    {text: "This guide is specifically tailored for MACOS USERS."},
                    {text: "The necessary software for installation includes Xcode command-line tools and Visual Studio Code. Administrative access is required for the installation of these programs."}
                ]}
                list={[
                    {task: "Launch the Terminal application."},
                    {task: "Enter the following command: xcode-select –install"},
                    {task: "Provide your password and accept the terms and conditions."},
                    {task: "Once the installation is complete, proceed to the following link: https://code.visualstudio.com"},
                    {task: "Select “Download for macOS” and drag and drop Visual Studio Code into your application folder."},
                ]}
            />

            <SubtitleTextList
                title="Step Two – Install Flutter:"
                body={[
                    {text: "Launch Visual Studio Code, and follow the first time set up if needed."},
                    {text: "On the left hand side bar, click on the 2x2 squares, extensions. then within the MarketPlace, search Flutter and then click the install button."},
                ]}
            />

            <ImageCard
                src={"src/img/course/l1/visual-studio-code-flutter-install.png"}
                alt="Visual studio code marketplace screen with flutter serached and installed"
                caption="VSCode Marketplace screen with Flutter searched" />

            <SubtitleTextList
                title="Step Three – Create Flutter Project:"
                body={[
                    {text: "On the left hand side bar, click on the pages, Explorer. Create a folder and load it."},
                    {text: "At the menu bar, click on View > Command Palette..."},
                    {text: "The search bar will be selected and search flutter and select 'Flutter: Create New Project'"},
                    {text: "Select EmptyApplication and save it in your current folder. Then name it my_app. Then only have 'Web' checked and select 'Okay'"},
                ]}
            />

            <ImageCard
                src={"src/img/course/l1/command-palette.png"}
                alt="MacOS Menu bar showing VS Codes selection with view selected, displaying Command Palette."
                caption="macOS Menu bar showing VSCode's selection with view selected" />

            <ImageCard
                src={"src/img/course/l1/new-project.png"}
                alt="Searching 'Flutter' and selecting 'Flutter: Create New Project'"
                caption="Searching 'Flutter' and selecting 'Flutter: Create New Project'" />

            <SubtitleTextList
                title="Step Three – Install Flutter SDK:"
                body={[
                    {text: "An error message will pop up asking to install the SDK."},
                    {text: "Click 'Download SDK' and select the root of your drive (Or wherever you would like to install it) then allow it to be added to your PATH."},
                    {text: "Once downloaded, your project will start to create."},
                    {text: "You are ready to develop your first Flutter app!"},
                ]}
            />

            <ImageCard
                src={"src/img/course/l1/download-sdk.png"}
                alt="VS Code asking to download the flutter SDK"
                caption="VSCode requesting the user to install the Flutter SDK" />

            <CompletedCard />
        </article>
    )
}
