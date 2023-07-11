import PropTypes from "prop-types";
import "../../css/PopUp.css";
import Location from "../../assets/desktop/icon-location.svg";
import { InputContext } from "../../Context/InputContextProvider";
import { useContext } from "react";
import close_icons from "../../assets/mobile/close-circle.svg";

function PopUp(props) {
    const { setFilterLocation, checkFullTime, setCheckFullTime, handleSearch } =
        useContext(InputContext);

    const handleClick = () => {
        handleSearch();
    };

    return props.trigger ? (
        <div className="pop_up">
            <img
                src={close_icons}
                alt="close icon"
                onClick={props.filterFalse}
                className="close_pop"
            />

            <div className="pop_up_div">
                <div className="Pop_header">
                    <img
                        src={Location}
                        alt="location_icon"
                        className="location_icon"
                    />
                    <input
                        type="text"
                        placeholder="Filter by location…"
                        className="pop_up_location"
                        onChange={(e) => setFilterLocation(e.target.value)}
                    />
                </div>
                <div className="pop_up_inputs">
                    <div className="input">
                        <input
                            type="checkbox"
                            className="popup_input"
                            checked={checkFullTime}
                            onChange={(e) => setCheckFullTime(e.target.checked)}
                        />
                        <label htmlFor="popup_input">Full Time Only</label>
                    </div>
                    <button className="button_1" onClick={handleClick}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
}

PopUp.propTypes = {
    trigger: PropTypes.bool.isRequired,
    filterFalse: PropTypes.func.isRequired,
};

export default PopUp;
