import { useContext } from "react";
import PropTypes from "prop-types";
import { MyThemeContext } from "../Context/ThemeContextProviderComponent";
import filter_icon from "../assets/mobile/icon-filter.svg";
import white_search_icon from "../assets/desktop/icon-search-white.svg";
import tablet_search_icon from "../assets/desktop/icon-search.svg";
import tablet_location_icon from "../assets/desktop/icon-location.svg";
import "../css/Search_seaction.css";

// context...............
import { InputContext } from "../Context/InputContextProvider";

const Search_Seaction = (props) => {
    const {
        setFilterLocation,
        filterLocation,
        filterText,
        setFilterText,
        checkFullTime,
        setCheckFullTime,
        handleSearch,
    } = useContext(InputContext);

    // seea]rch button onclick handler
    const handleClick = () => {
        handleSearch();
    };

    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    return (
        <>
            {/* mobile...................... */}
            <div
                className="mobile_search_div"
                style={{
                    backgroundColor: night && "#19202D",
                }}
            >
                <input
                    className="imput_field"
                    type="text"
                    placeholder="Filter by title....."
                    value={filterText}
                    style={{
                        border: night && "1px solid  #19202D",
                        color: night && "white",
                    }}
                    onChange={(e) => setFilterText(e.target.value)}
                />
                <img
                    src={filter_icon}
                    alt="filter icon"
                    className="filter_icon"
                    onClick={props.handlePopup}
                />
                <button className="search_btn" onClick={handleClick}>
                    <img
                        src={white_search_icon}
                        alt="search icon"
                        className="search_icon"
                        value={filterLocation}
                    />
                </button>
            </div>
            {/* tablet..................... */}
            <div
                className="tablet_search_div"
                style={{
                    backgroundColor: night && "#19202D",
                }}
            >
                <div className="input_div">
                    <img src={tablet_search_icon} alt="search icon" />
                    <input
                        className="imput_field"
                        type="text"
                        placeholder="Filter by title....."
                        style={{
                            border: night && "1px solid  #19202D",
                            color: night && "white",
                        }}
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
                <div className="input_div">
                    <img src={tablet_location_icon} alt="search icon" />
                    <input
                        className="imput_field"
                        type="text"
                        placeholder="Filter by location…....."
                        style={{
                            border: night && "1px solid  #19202D",
                            color: night && "white",
                        }}
                        value={filterLocation}
                        onChange={(e) => setFilterLocation(e.target.value)}
                    />
                </div>
                <div className="checky">
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={checkFullTime}
                        onChange={(e) => setCheckFullTime(e.target.checked)}
                        name="check_fulltime"
                        id="check_fulltime"
                    />
                    <label
                        htmlFor="check_fulltime"
                        style={{
                            color: night && "white",
                        }}
                    >
                        Full Time
                    </label>
                </div>
                <button className="button_1" onClick={handleClick}>
                    Search
                </button>
            </div>
        </>
    );
};

// propType to explicitly specify the type of a variable; works like typescript //

Search_Seaction.propTypes = {
    handlePopup: PropTypes.func.isRequired,
    handleSearch: PropTypes.func,
};

export default Search_Seaction;
