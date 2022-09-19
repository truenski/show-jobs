import styled from "styled-components";

export const Container = styled.div`
margin-top:80px;
display: flex;
flex-direction: column;
align-items: center;
}
`;

export const CarouselArea = styled.div`
  width: 100%;
  height: 83vh;
  overflow: hidden;
  padding: 0 10px;
`;
export const Button = styled.button`
  height: 30px;
  width: 90%;
  border: solid 1px white;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 90vw;
  }
`;
export const Next = styled(Button)``;
export const Prev = styled(Button)``;
