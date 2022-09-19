import { faExternalLink, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosResponse } from "axios";

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
import { useEffect, useState } from "react";
import { Api } from "../../api/axios";

type Props = { jobs: Job[] };

export const JobList = ({ jobs }: Props) => {
  return (
    <>
      {jobs.map((job: Job, key) => (
        <CardContainer key={key} href={job.OBJurl} target="_blank">
          {job.companyLogo ? (
            <IconContainer>
              <CompanyLogo src={job.companyLogo} />
            </IconContainer>
          ) : (
            <JobIcon>{job.companyName[0]}</JobIcon>
          )}

          <RightSideContainer>
            <h3>{job.jobTitle}</h3>

            <CompanyName>
              {job.companyName}
              <BlackBtn>
                Opens new tab
                <FontAwesomeIcon
                  style={{
                    marginLeft: "5px",
                  }}
                  icon={faExternalLink}
                />
              </BlackBtn>
            </CompanyName>

            <ShortDesc>{job.shortDesc}</ShortDesc>
          </RightSideContainer>
        </CardContainer>
      ))}
    </>
  );
};

export default JobList;
