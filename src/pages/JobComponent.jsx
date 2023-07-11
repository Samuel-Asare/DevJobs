import { useContext } from "react";
import { useParams } from "react-router-dom";
import JobHeader from "../components/EachJobComponent.jsx/JobHeader";
import JobContent from "../components/EachJobComponent.jsx/JobContent";
import { InputContext } from "../Context/InputContextProvider";

const JobComponent = () => {
    const { jobsdata } = useContext(InputContext);
    const { id } = useParams();

    const job = jobsdata[id - 1];

    return (
        <>
            <JobHeader job={job} />
            <JobContent job={job} />
        </>
    );
};

export default JobComponent;
