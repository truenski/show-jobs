import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  box-shadow: 1px 1px 10px 0px #ffffff36;
  z-index: 2;
  display: flex;
  justify-content: end;

  button:last-child {
    margin-right: 15px;
  }
`;

export const FilterButton = styled.button`
  margin: 15px;
  padding: 15px;
  border: none;
  background: #3174ee;
  cursor: pointer;
  border-radius: 5px;
  color: lightgray;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  svg {
    margin-left: 5px;
    background: #3174ee;

    path {
      color: lightgray;
    }
  }

  &:hover {
    background: #205fd0;
    color: white;

    svg {
      background: #205fd0;
      path {
        color: white;
      }
    }
  }

  }
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  height: ${({ open }) => (open ? "100px" : "0px")};
  margin-top: ${({ open }) => (open ? "100px" : "0px")};
  margin-bottom: ${({ open }) => (open ? "-50px" : "0px")};
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s ease-in;
  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 710px) {
    margin-top: ${({ open }) => (open ? "100px" : "-60px")};
    border-radius: 3px;
    display: block;
    position: absolute;
    right: 50px;
    top: 0;
    border: 1px white solid;
    height: auto;

    button {
      padding: 20px;
    }
  }

  a {
    font-size: 2rem;
    padding: 1.5rem 0;

    text-decoration: none;
    transition: height 0.3s linear;

    div {
      font-weight: bold;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export const ButtonSideMenu = styled(FilterButton)`
  border: none;
  margin: 5px;
  padding: 15px 5px;
  background: initial;
  display: block;

  svg {
    background: initial;
  }

  &:hover {
    background: initial;
    svg {
      background: initial;
    }
  }
`;
