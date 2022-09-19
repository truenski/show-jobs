import { faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Job } from "../../typings";
import { Button } from "./styled";

type Props = { setJobs: React.Dispatch<React.SetStateAction<Job[]>> };

const SortByCompanyName = ({ setJobs }: Props) => {
  /* function that will compare the companyName strings in the jobs array, and sort A-Z   */
  const sortByCompanyName = () => {
    setJobs((jobs) => [
      ...jobs.sort((a, b) =>
        a.companyName > b.companyName
          ? 1
          : b.companyName > a.companyName
          ? -1
          : 0
      ),
    ]);
  };

  return (
    <Button
      onClick={() => {
        sortByCompanyName();
      }}
    >
      Sort By Company Name <FontAwesomeIcon icon={faArrowUpAZ} />
    </Button>
  );
};

export default SortByCompanyName;
