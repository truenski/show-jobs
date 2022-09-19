import React from "react";
import { Job } from "../../typings";
import FilterLastSevenDays from "./FilterLastSevenDays";
import SortByCompanyName from "./SortByCompanyName";
import { Container } from "./styled";

type Props = { setJobs: React.Dispatch<React.SetStateAction<Job[]>> };

const Header = ({ setJobs }: Props) => {
  return (
    <Container>
      <SortByCompanyName setJobs={setJobs} />
      <FilterLastSevenDays setJobs={setJobs} />
    </Container>
  );
};

export default Header;
