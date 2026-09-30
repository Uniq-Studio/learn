import {useState} from "react";
import L1GitHub from "../L1GitHub.jsx";
import CourseMainPage from "../CourseMainPage.jsx";
import L5FunArr from "../L5FunArr.jsx";
import L1Install from "../L1Install.jsx";

export default function NavHost() {
    const [page, setPage] = useState(1);
    const displayPage = () => {
        switch (page) {
            case 0:
                return <CourseMainPage
                    onClickL1={() => setPage(1)}
                    onClickL2={() => setPage(2)}
                    onClickL3={() => setPage(3)}
                    onClickL4={() => setPage(4)}
                    onClickL5={() => setPage(5)}
                    onClickL6={() => setPage(6)}
                    onClickL7={() => setPage(7)}
                    onClickL8={() => setPage(8)}
                />;
            case 1:
                return <L1Install onClickBack={() => setPage(0)} />
            case 2:
                return <L1GitHub onClickBack={() => setPage(0)} />
            case 3:
                return <L1GitHub onClickBack={() => setPage(0)} />
            case 4:
                return <L1GitHub onClickBack={() => setPage(0)} />
            case 5:
                return <L5FunArr onClickBack={() => setPage(0)} />
            case 6:
                return <L1GitHub onClickBack={() => setPage(0)} />
            case 7:
                return <L1GitHub onClickBack={() => setPage(0)} />
            case 8:
                return <L1GitHub onClickBack={() => setPage(0)} />
            default:
                return <CourseMainPage />;
        }
    }
    return (displayPage());
}