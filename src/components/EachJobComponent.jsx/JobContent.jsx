import PropTypes from "prop-types";
import "../../css/JobContent.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyThemeContext } from "../../Context/ThemeContextProviderComponent";

const JobContent = ({ job }) => {
    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    return (
        <div className="main_content_div">
            {/* job details information */}
            <div
                className="content"
                style={{
                    backgroundColor: night && "#19202D",
                    color: night && "#fff",
                    boxShadow: "1px 1px 4px #00000038",
                }}
            >
                {/*.................... content Header............... */}

                <div className="content_header_section">
                    <div className="top_section">
                        <div className="date_time">
                            <p className="post_time">{job.postedAt}</p>
                            <p className="dot">.</p>
                            <p className="job_status">{job.contract}</p>
                        </div>
                        <h3 className="job_role">{job.position}</h3>
                        <h4 className="job_location">{job.location}</h4>
                    </div>

                    <Link to={job.apply}>
                        <button className="button_1">Apply Now</button>
                    </Link>
                </div>

                {/* ...............mid-content...................... */}

                <div className="lower_section">
                    <p className="job_description">{job.description}</p>
                    <div className="requirements_div">
                        <h3 className="header_text">Requirements</h3>
                        <p className="text">{job.requirements.content}</p>
                        <div className="items_div">
                            <ul className="items">
                                {job.requirements.items.map((item) => (
                                    <li key={"item"}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="what_will_you_do_div">
                        <h3 className="header_text">What You Will Do</h3>
                        <p className="text"> {job.role.content}</p>
                        <div className="items_div">
                            <ol type="numbered" className="items">
                                {job.role.items.map((item) => (
                                    <li key={"item"}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div
                className="apply_bottom_btn"
                style={{
                    backgroundColor: night && "#19202D",
                    color: night && "#fff",
                }}
            >
                <div className="left_text">
                    <h4 className="Job_role">{job.position}</h4>
                    <p>So Digital Inc.</p>
                </div>
                <Link to={job.apply}>
                    <button className="button_1">Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

// propType to explicitly specify the type of a variable; works like typescript //

JobContent.propTypes = {
    job: PropTypes.shape({
        postedAt: PropTypes.string.isRequired,
        contract: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        requirements: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        items: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        apply: PropTypes.string.isRequired,
    }).isRequired,
};

export default JobContent;
