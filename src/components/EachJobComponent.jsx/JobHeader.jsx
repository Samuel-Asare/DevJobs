import PropTypes from "prop-types";
import "../../css/JobHeader.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyThemeContext } from "../../Context/ThemeContextProviderComponent";

const JobHeader = ({ job }) => {
    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    return (
        <div
            className="company_header_block"
            style={{
                backgroundColor: night && "#19202D",
                color: night && "#fff",
            }}
        >
            <div className="left-side">
                {/* image */}
                <div
                    className="image_div"
                    style={{ background: `${job.logoBackground}` }}
                >
                    <img
                        src={job.logo}
                        alt="company icon"
                        className="company_icon"
                    />
                </div>
                {/* company name */}
                <div className="company_details_div">
                    <h3 className="company_name">{job.company}</h3>
                    <p className="companys_url">{job.company}.com</p>
                </div>
            </div>

            <Link to={job.website}>
                <div className="right-side">
                    <button
                        className="button_2_dark"
                        style={{
                            backgroundColor: night && "#ffffff0e",
                            color: night && "#fff",
                            opacity: night && "1",
                        }}
                    >
                        Company Site
                    </button>
                </div>
            </Link>
        </div>
    );
};

// propType to explicitly specify the type of a variable; works like typescript //
JobHeader.propTypes = {
    job: PropTypes.shape({
        logo: PropTypes.string.isRequired,
        logoBackground: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
    }).isRequired,
};

export default JobHeader;
