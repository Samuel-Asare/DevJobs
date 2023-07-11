import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// Jobs json data
import jobData from "../data.json";

// create a new context called InputContext
export const InputContext = createContext(null);

// the component that houses the InputContext
export const InputContextProvider = ({ children }) => {
    const [jobsdata, setJobsData] = useState(jobData);
    const [filterText, setFilterText] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [checkFullTime, setCheckFullTime] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);

    useEffect(() => {
        loadJobs();
    });

    // check filter inputs ...................

    function check() {
        if (searchClicked) {
            if (filterText && filterLocation && checkFullTime) {
                // check for text, location and full time and then setJobData

                const getTextFilter = jobData.filter((jobs) => {
                    return jobs.position.includes(filterText);
                });
                const locationFilteredText = getTextFilter.filter((jobs) => {
                    return jobs.location.includes(filterLocation);
                });

                const fullTimeFiltered = locationFilteredText.filter((jobs) => {
                    return jobs.contract === "Full Time";
                });
                setJobsData(fullTimeFiltered);

                // .........................
            } else if (filterText && filterLocation) {
                // check for text and location and then setJobData

                const getTextFilter = jobData.filter((jobs) => {
                    return jobs.position.includes(filterText);
                });
                const locationFilteredText = getTextFilter.filter((jobs) => {
                    return jobs.location.includes(filterLocation);
                });
                setJobsData(locationFilteredText);

                // .................
            } else if (filterText && checkFullTime) {
                // check for text and full time and then setJobData

                const getTextFilter = jobData.filter((jobs) => {
                    return jobs.position.includes(filterText);
                });

                const fullTimeFiltered = getTextFilter.filter((jobs) => {
                    return jobs.contract === "Full Time";
                });
                setJobsData(fullTimeFiltered);

                // .................
            } else if (filterLocation && checkFullTime) {
                // check for location and full time and then setJobData

                const locationFilteredText = jobData.filter((jobs) => {
                    return jobs.location.includes(filterLocation);
                });

                const fullTimeFiltered = locationFilteredText.filter((jobs) => {
                    return jobs.contract === "Full Time";
                });
                setJobsData(fullTimeFiltered);

                // ...............
            } else if (filterText) {
                // check for filter text and then setJobData
                const getTextFilter = jobData.filter((jobs) => {
                    return jobs.position.includes(filterText);
                });
                setJobsData(getTextFilter);

                // ........
            } else if (filterLocation) {
                // check for location and then setJobData

                const locationFilteredText = jobData.filter((jobs) => {
                    return jobs.location.includes(filterLocation);
                });
                setJobsData(locationFilteredText);

                // .............
            } else if (checkFullTime) {
                // check for check full time and then setJobData
                const fullTimeFiltered = jobData.filter((jobs) => {
                    return jobs.contract === "Full Time";
                });
                setJobsData(fullTimeFiltered);

                // ..................
            } else {
                setJobsData(jobData);
            }
        }
    }

    // empty inputs fields.......... { render all jobs}

    function loadJobs() {
        if (
            filterText === "" &&
            filterLocation === "" &&
            checkFullTime !== true
        ) {
            setJobsData(jobData);
        }
    }

    // on search button click.........

    const handleSearch = () => {
        console.log("handle search");
        setSearchClicked(true);
        check();
    };

    const values = {
        filterText,
        filterLocation,
        setFilterText,
        setFilterLocation,
        checkFullTime,
        setCheckFullTime,
        jobsdata,
        setJobsData,
        handleSearch,
    };

    return (
        <InputContext.Provider value={values}>{children}</InputContext.Provider>
    );
};

InputContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default InputContextProvider;
