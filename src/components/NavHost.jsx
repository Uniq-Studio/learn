import {useState} from "react";
import CourseMainPage from "../CourseMainPage.jsx";
import L1Install from "../L1Install.jsx";
import L2Hello from "../L2Hello.jsx";
import L3UI from "../L3UI.jsx";
import L4Layout from "../L4Layout.jsx";
import L5Challenge from "../L5Challenge.jsx";
import LectureSlides from "../LectureSlides.jsx";

export default function NavHost() {
    const [page, setPage] = useState(6);
    const displayPage = () => {
        switch (page) {
            case 0:
                return <CourseMainPage
                    onClickL1={() => setPage(1)}
                    onClickL2={() => setPage(2)}
                    onClickL3={() => setPage(3)}
                    onClickL4={() => setPage(4)}
                    onClickL5={() => setPage(5)}
                    onClickSlides={() => setPage(6)}
                />;
            case 1:
                window.scroll(0,0)
                return <L1Install onClickBack={() => setPage(0)} onClickNext={() => setPage(2)} />
            case 2:
                window.scroll(0,0)
                return <L2Hello onClickBack={() => setPage(0)} onClickNext={() => setPage(3)} />
            case 3:
                window.scroll(0,0)
                return <L3UI onClickBack={() => setPage(0)} onClickNext={() => setPage(4)} />
            case 4:
                window.scroll(0,0)
                return <L4Layout onClickBack={() => setPage(0)} onClickNext={() => setPage(5)} />
            case 5:
                window.scroll(0,0)
                return <L5Challenge onClickBack={() => setPage(0)} />
            case 6:
                window.scroll(0,0)
                return <LectureSlides onClickBack={() => setPage(0)} />
            default:
                window.scroll(0,0)
                return <CourseMainPage
                    onClickL1={() => setPage(1)}
                    onClickL2={() => setPage(2)}
                    onClickL3={() => setPage(3)}
                    onClickL4={() => setPage(4)}
                    onClickL5={() => setPage(5)}
                    onClickSlides={() => setPage(6)}
                />;
        }
    }
    return (displayPage());
}