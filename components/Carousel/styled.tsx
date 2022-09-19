import styled from "styled-components";

export const Container = styled.div`
margin-top:80px;
display: flex;
flex-direction: column;
align-items: center;


@media (max-width: 510px) {
  margin-bottom: 10px;
}
}
`;

export const CarouselArea = styled.div<{ scrollY: number }>`
  width: 100%;
  height: 83vh;
  overflow: hidden;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: ${(props) => props.scrollY}px;
    transition: all ease 0.5s;
  }
`;
export const Button = styled.button`
  height: 30px;
  width: 488px;
  border: solid 1px white;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 90vw;
  }
`;
export const Next = styled(Button)<{ scrollY: number }>`
  border: ${(props) => (props.scrollY == 0 ? "dimgrey" : "initial")} 1px solid;
  cursor: ${(props) => (props.scrollY == 0 ? "auto" : "pointer")};
  svg path {
    color: ${(props) => (props.scrollY == 0 ? "dimgrey" : "white")};
  }
`;
export const Prev = styled(Button)<{ disablePrev: boolean }>`
  border: ${(props) => (props.disablePrev == true ? "dimgrey" : "initial")} 1px
    solid;
  cursor: ${(props) => (props.disablePrev == true ? "auto" : "pointer")};
  svg path {
    color: ${(props) => (props.disablePrev == true ? "dimgrey" : "white")};
  }
`;
