import ContentTitle from "./components/ContentTitle.jsx";
import TitleText from "./components/TitleText.jsx";
import SubtitleTextList from "./components/SubtitleTextList.jsx";
import ImageCard from "./components/ImageCard.jsx";
import CompletedCard from "./components/CompletedCard.jsx";
import LearningResources from "./components/LearningResources.jsx"

export default function L1GitHub(
    {onClickBack}
) {
    return(
        <article>
            <ContentTitle
                subject="COMP10013 – DYNAMIC WEB TECHNOLOGIES"
                title="Getting to Know GitHub"
                urgent="If you already have a GitHub account, you may skip this part!"
                onClickBack={onClickBack} />

            <TitleText
                title="Aim:"
                body="The primary goal of this content is to get a personal GitHub account created to store all your project files in a repository. Learning how to create and update repositories." />

            <SubtitleTextList
                title="Step One – Create an Account:"
                body={[
                    {text: "To get started with GitHub, you'll need to create a free personal account on GitHub.com and verify your email address."},
                    {text: "Every person who uses GitHub.com signs into a personal account. Your personal account is your identity on GitHub.com and has a username and profile."},
                    {text: "Follow the first link in the Learning Resources, and either use the Single-Sign-On options or fill in the form and click 'Create Account' and validate your email by checking your inbox for an automated email by GitHub."},
                ]}
            />

            <ImageCard
                src={"src/img/course/l1/github-account-creation.png"}
                alt="GitHub Account Creation"
                caption="GitHub Account Creation Page"
            />

            <SubtitleTextList
                title="Step Two – Student Benefits:"
                body={[
                    {text: "After creating your personal GitHub Account, as a student, you can apply to join GitHub Global Campus and receive access to the student resources and benefits offered by GitHub Education."},
                    {text: "Follow the second link in the Learning Resources and click on 'Start an application'"},
                    {text: "Add your student email address and a picture of your student ID and send it off to get validated, this will give you some professional benefits for free!"},
                ]}
            />

            <ImageCard
                src={"src/img/course/l1/github-student-benefits.png"}
                alt="GitHub Student Benefits"
                caption="GitHub Education, enroled student"
            />

            <SubtitleTextList
                title="Step Three – Create a Repository:"
                body={[
                    {text: "The first thing we'll do is create a repository. You can think of a repository as a folder that contains related items, such as files, images, videos, or even other folders. A repository usually groups together items that belong to the same \"project\" or thing you're working on."},
                    {text: "GitHub lets you add a README file at the same time you create your new repository. GitHub also offers other common options such as a license file, but you do not have to select any of them now. Your hello-world repository can be a place where you store ideas, resources, or even share and discuss things with others."},
                ]}
                list={[
                    {task: "In the upper-right corner of any page, select +, then click New repository."},
                    {task: "In the \"Repository name\" box, type 'hello-world'."},
                    {task: "In the \"Description\" box, type a short description. For example, type 'This repository is for practicing the GitHub Flow.'"},
                    {task: "Select whether your repository will be Public or Private."},
                    {task: "Select Add a README file."},
                    {task: "Click Create repository."},
                ]}
            />

            <SubtitleTextList
                title="Step Four – Make and Commit Changes:"
                body={[
                    {text: "You can make and save changes to the files in your repository. On GitHub, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you’ve done and why."},
                ]}
                list={[
                    {task: "Click the 'README.md' file."},
                    {task: "To edit the file, click the pencil icon."},
                    {task: "In the editor, write a bit about yourself."},
                    {task: "Click Commit changes."},
                    {task: "In the \"Commit changes\" box, write a commit message that describes your changes."},
                    {task: "Click Commit changes."},
                ]}
            />

            <CompletedCard />

            <LearningResources resources={[
                {
                    name: "Create an Account",
                    author: "GitHub",
                    link: "https://github.com/signup"
                },
                {
                    name: "GitHub Education",
                    author: "GitHub",
                    link: "https://github.com/settings/education/benefits"
                },
            ]}/>
        </article>
    )
}