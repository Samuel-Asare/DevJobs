import "../css/Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import header_logo from "../assets/desktop/logo.svg";
import sun_toggle from "../assets/desktop/icon-sun.svg";
import mon_toggle from "../assets/desktop/icon-moon.svg";
import { MyThemeContext } from "../Context/ThemeContextProviderComponent";

const Header = () => {
    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className="header">
            <Link to="/" className="logo">
                <img src={header_logo} alt="devjobs logo" />
            </Link>

            <div className="toggle">
                <img src={sun_toggle} alt="toggle sun" />

                <div className="toggle_click">
                    <div
                        className="toggle_cycle"
                        onClick={handleClick}
                        style={{ right: night ? "1px" : "33px" }}
                    ></div>
                </div>

                <img src={mon_toggle} alt="toggle sun" />
            </div>
        </div>
    );
};

export default Header;
