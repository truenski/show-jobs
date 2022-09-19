import { faClock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Job } from "../../typings";

type Props = { setJobs: React.Dispatch<React.SetStateAction<Job[]>> };
const FilterLastSevenDays = ({ setJobs }: Props) => {
  /*Assuming that postedDate will always send me data in days, this function will filter the jobs array, returning the job if the job.postedDate is lower or equal than 7,
   or if there is no number, because of the possibility of a job being posted "a day ago".
  */
  const filterLastSevenDays = () => {
    setJobs((jobs: Job[]) => [
      // eslint-disable-next-line array-callback-return
      ...jobs.filter((job) => {
        /*Get the number on job.postedDate string */
        const day = Number(job.postedDate.replace(/[^\d]/g, ""));
        if (day) {
          return day <= 7;
        }
      }),
    ]);
  };

  return (
    <Button
      onClick={() => {
        filterLastSevenDays();
      }}
    >
      Only recent Jobs <FontAwesomeIcon icon={faClock} />
    </Button>
  );
};

export default FilterLastSevenDays;
