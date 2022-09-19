import { ThemeProvider } from "styled-components";
import { StyledMenu } from "./styled";
import FilterLastSevenDays from "./Buttons/FilterLastSevenDays";
import SortByCompanyName from "./Buttons/SortByCompanyName";

type Props = {
  open: boolean;
  children: any;
};
const SideMenu = ({ open, children }: Props) => {
  return <StyledMenu open={open}>{children}</StyledMenu>;
};

export default SideMenu;
