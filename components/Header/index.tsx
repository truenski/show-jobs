import React, { useState } from "react";
import { Job } from "../../typings";
import FilterListButton from "./FilterListButton";
import FilterLastSevenDays from "./FilterLastSevenDays";
import SideMenu from "./SideMenu";
import SortByCompanyName from "./SortByCompanyName";
import { Container } from "./styled";

type Props = { setJobs: React.Dispatch<React.SetStateAction<Job[]>> };

const Header = ({ setJobs }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <FilterListButton open={open} setOpen={setOpen} />
      </Container>
      <SideMenu open={open}>
        <SortByCompanyName setJobs={setJobs} />
        <FilterLastSevenDays setJobs={setJobs} />
      </SideMenu>
    </>
  );
};

export default Header;
