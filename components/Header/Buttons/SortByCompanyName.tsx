import { faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Job } from "../../../typings";
import { ButtonSideMenu } from "../styled";

type Props = {
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
};

const SortByCompanyName = ({ setJobs }: Props) => {
  /* I'm comparing the companyName strings, sorting A-Z. after the sort, is returned a new array which i set as the new jobs state   */
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
    <ButtonSideMenu
      onClick={() => {
        sortByCompanyName();
      }}
    >
      Sort By Company Name <FontAwesomeIcon icon={faArrowUpAZ} />
    </ButtonSideMenu>
  );
};

export default SortByCompanyName;
