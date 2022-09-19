import React, { useState } from "react";
import { Job } from "../../typings";
import FilterListButton from "./Buttons/FilterListButton";
import FilterLastSevenDays from "./Buttons/FilterLastSevenDays";
import SideMenu from "./SideMenu";
import SortByCompanyName from "./Buttons/SortByCompanyName";
import { Container, ZippiaText } from "./styled";
import ClearFilters from "./Buttons/ClearFilters";

type Props = {
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  initialJobs: Job[];
};

const Header = ({ setJobs, initialJobs }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <ZippiaText src="https://static.zippia.com/ui-router/images/header/logo_white.svg" />
        <FilterListButton open={open} setOpen={setOpen} />
      </Container>
      <SideMenu open={open}>
        <SortByCompanyName setJobs={setJobs} />
        <FilterLastSevenDays setJobs={setJobs} />
        <ClearFilters setJobs={setJobs} initialJobs={initialJobs} />
      </SideMenu>
    </>
  );
};

export default Header;
