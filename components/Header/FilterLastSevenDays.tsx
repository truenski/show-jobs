import { faClock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ButtonSideMenu } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Job } from "../../typings";

type Props = {
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
};
const FilterLastSevenDays = ({ setJobs }: Props) => {
  /*This function will filter the jobs array, returning the job if the job.postedDate contains "h" if the time is returned in hours,
  or if the day is lower or equal than 7. It will not return if the time is returned in years or months (m || y)
  */
  const filterLastSevenDays = () => {
    setJobs((jobs: Job[]) => [
      // eslint-disable-next-line array-callback-return

      ...jobs.filter((job) => {
        /*Get the number on job.postedDate string */

        if (job.postedDate.includes("h")) {
          return true;
        } else if (
          job.postedDate.includes("m") ||
          job.postedDate.includes("y")
        ) {
          return false;
        }
        const day = Number(job.postedDate.replace(/[^\d]/g, ""));
        return day <= 7;
      }),
    ]);
  };

  return (
    <ButtonSideMenu
      onClick={() => {
        filterLastSevenDays();
      }}
    >
      Only recent Jobs <FontAwesomeIcon icon={faClock} />
    </ButtonSideMenu>
  );
};

export default FilterLastSevenDays;
