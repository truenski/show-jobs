import styled from "styled-components";

const colors = ["red", "green", "blue", "purple", "brown", "orange"];
const randomIndex = Math.floor(Math.random() * colors.length);

export const JobIcon = styled.div`
  background: ${colors[randomIndex]};
  width: 50px;
  height: 50px;
  padding: 11px 17px;
  border-radius: 4px;
  font-weight: bolder;
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CardContainer = styled.a`
  text-decoration: none;
  color: black;
  border-left: 4px ${colors[randomIndex]} solid;
  display: flex;
  gap: 20px;
  margin: 20px;
  outline: 1px #80808070 solid;
  padding: 20px;
  height: auto;
  width: 488px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 720px) {
    width: 90vw;
    margin: 20px 10px;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const CompanyLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  background: none;
`;

export const IconContainer = styled.div`
  overflow: hidden;
  min-width: 50px;
  height: 50px;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3px;
`;

export const BlackBtn = styled.button`
  border: none;
  padding: 5px;
  border-radius: 2px;
  background: black;
  margin: 5px;
  cursor: pointer;
  color: lightgray;

  svg {
    path {
      color: #3174ee;
    }
  }
`;

export const CompanyName = styled.span`
  font-weight: bold;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: lightgray;
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  white-space: break-spaces;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ShortDesc = styled.span`
overflow: hidden;
margin: 5px 0;
color:lightgray;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  

}`;
