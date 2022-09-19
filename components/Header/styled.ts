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

export const Button = styled.button`
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

  @media (max-width: 720px) {
    border: none;
    margin: 5px;
    padding: 15px 5px;
    background: initial;

    svg {
      background: initial;
    }

    &:hover {
      background: initial;
      svg {
        background: initial;
      }
    }
  }
`;
