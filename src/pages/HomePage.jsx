import Search_Seaction from "../components/Search_Seaction";
import JobCards from "../components/JobCards";
import Button from "../components/Button";
import PopUp from "../components/PopUp/PopUp";
import { useState } from "react";
import InputContextProvider from "../Context/InputContextProvider";

const HomePage = () => {
    const [filterPopUp, setFilterPopUp] = useState(false);

    function handlePopup() {
        setFilterPopUp(true);
    }
    function filterFalse() {
        setFilterPopUp(false);
    }

    const bottomPadding = {
        paddingBottom: "4rem",
        position: "reletive",
        minHeight: "100vh",
    };

    return (
        <div style={bottomPadding}>
            {/* wrapping the component that has the input context */}
            <InputContextProvider>
                <Search_Seaction handlePopup={handlePopup} />
                <JobCards />
                <Button />
                <PopUp trigger={filterPopUp} filterFalse={filterFalse} />
            </InputContextProvider>
        </div>
    );
};

export default HomePage;
