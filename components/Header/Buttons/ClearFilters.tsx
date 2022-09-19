import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Job } from "../../../typings";
import { ButtonSideMenu } from "../styled";

type Props = {
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  initialJobs: Job[];
};
const ClearFilters = ({ setJobs, initialJobs }: Props) => {
  const clearFilter = () => {
    setJobs([...initialJobs]);
  };

  return (
    <ButtonSideMenu onClick={clearFilter}>
      Clear Filters <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
    </ButtonSideMenu>
  );
};

export default ClearFilters;
