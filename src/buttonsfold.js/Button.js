import styled from "styled-components";
export const Button = styled.button`
background-color: black;
  color: white;
  padding: 10px 18px;
  margin-top: 20px;
  border: none;
  justify-content: center;
  border-radius: 5px;
  min-width: 220px;
  
  font-size: 25px;
  transition:0.4s background ease-in;
  cursor: pointer;
 
  &:hover{
    background-color:white;
  color: black;
  border: 1px solid black;
  transition: 0.3 ease-in;
  
  }`;


  export const OutlineButton=styled(Button)`
  background-color:white;
  border: 1px solid black;
  color:black;

  &:hover{
    background-color:black;
  color: white;
  border: 1px solid transparent;
  transition: 0.3 background ease-in;
  
  } `;