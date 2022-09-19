import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CardContainer,
  JobIcon,
  BlackBtn,
  RightSideContainer,
  ShortDesc,
  CompanyName,
  CompanyLogo,
  IconContainer,
} from "./styled";
import { Job } from "../../typings";

type Props = { jobs: Job[] };

export const JobList = ({ jobs }: Props) => {
  return (
    <>
      {jobs.map((job: Job, key) => {
        const colors = [
          "red",
          "green",
          "blue",
          "purple",
          "brown",
          "orange",
          "turquoise",
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);

        return (
          <CardContainer
            randomIndex={randomIndex}
            colors={colors}
            key={key}
            href={job.OBJurl}
            target="_blank"
          >
            {job.companyLogo ? (
              <IconContainer>
                <CompanyLogo src={job.companyLogo} />
              </IconContainer>
            ) : (
              <JobIcon colors={colors} randomIndex={randomIndex}>
                {job.companyName[0]}
              </JobIcon>
            )}

            <RightSideContainer>
              <h3>{job.jobTitle}</h3>

              <CompanyName>
                {job.companyName}
                <BlackBtn>
                  Opens new tab
                  <FontAwesomeIcon icon={faExternalLink} />
                </BlackBtn>
              </CompanyName>

              <ShortDesc>{job.shortDesc}</ShortDesc>
            </RightSideContainer>
          </CardContainer>
        );
      })}
    </>
  );
};

export default JobList;
