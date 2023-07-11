import { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/JobCards.css";
import { InputContext } from "../Context/InputContextProvider";
import { MyThemeContext } from "../Context/ThemeContextProviderComponent";

const JobCards = () => {
    const { jobsdata } = useContext(InputContext);

    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    return (
        <div className="container">
            {/* mapping through the the jobs json that is passed to the component*/}
            {jobsdata.map((job) => (
                <div
                    className="card"
                    key={job.id}
                    style={{
                        backgroundColor: night && "#121721",
                        color: night && "#fff",
                    }}
                >
                    <Link
                        to={`/${job.id}`}
                        className="img_div"
                        style={{ background: `${job.logoBackground}` }}
                    >
                        <img
                            src={job.logo}
                            alt="company icon"
                            className="card_image"
                        />
                    </Link>
                    <div className="job_information">
                        <div className="status">
                            <p className="card_time">{job.postedAt}</p>
                            <h2 className="circle">.</h2>
                            <p className="job_status">{job.contract}</p>
                        </div>
                        <div className="position_div">
                            <Link
                                className="job_position"
                                to={`/${job.id}`}
                                style={{
                                    color: night && "#fff",
                                }}
                            >
                                {job.position}
                            </Link>
                        </div>
                        <h4
                            style={{
                                color: night && "#6E8098",
                            }}
                            className="job_company"
                        >
                            {job.company}
                        </h4>

                        <h4 className="location">{job.location}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobCards;
