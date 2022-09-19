import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  font-family: Open sans;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;

       background:#181818;
       color:white;
   }
   #root{
       margin:0 auto;
      
       
   }`;
