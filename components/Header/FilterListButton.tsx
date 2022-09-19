import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { FilterButton } from "./styled";

type Props = {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
};
const FilterListButton = ({ open, setOpen }: Props) => {
  return (
    <FilterButton onClick={() => setOpen(!open)}>
      Filters/Sort <FontAwesomeIcon icon={faFilter} />
    </FilterButton>
  );
};

export default FilterListButton;
