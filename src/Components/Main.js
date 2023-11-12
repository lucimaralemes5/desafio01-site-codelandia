import React from "react";
import styled from "styled-components";
import ImgHeart from "/src/Components/heart.png";

export const Card = styled.main`
  background-color: #f3f5f7;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  width: 80vw;
`;

export const DivData = styled.div`
  color: #717171;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 78vw;
`;

export const BoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  width: 78vw;
`;
export const Tema = styled.h3`
  cursor: pointer;
  width: 78vw;
  height: 7vh;
  font-size: 22px;
  color: #1a202c;
`;

export const TextBox = styled.p`
  height: 22vh;
  width: 78vw;
  font-size: 16px;
  color: #717171;
`;

function Main({ data, titulo, texto }) {
  //usando props na main
  return (
    <Card>
      <Box>
        <DivData>
          <p>{data}</p>
          <img src={ImgHeart} alt="coração" />
        </DivData>

        <BoxDiv>
          <Tema>{titulo}</Tema>
          <TextBox>{texto}</TextBox>
        </BoxDiv>
      </Box>
    </Card>
  );
}
export default Main;
