import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Icon from "../Components/lupa.png";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0%;
  padding:0%;
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;

}
`;

export const BoxHeader = styled.header`
  display: flex;
  justify-content: center;
  background: linear-gradient(88deg, #574ae8 0%, #3ea1db 100%);
  height: 25vh;
  color: white;
`;

export const Section = styled.section`
  width: 80vw;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13vh;
  font-size: 22px;
`;

export const Search = styled.div`
  height: 10vh;
  display: flex;

  align-items: center;
`;

export const InputSearch = styled.input`
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2) url(${Icon}) no-repeat 10px center;
  background-size: 18px;
  padding-left: 40px;
  width: 80vw;
  height: 7vh;

  &::placeholder {
    color: white;
    opacity: 0.5;
    font-family: Inter;
    font-size: 15px;
  }
`;

function Header() {
  return (
    <BoxHeader>
      <GlobalStyle />
      <Section>
        <TextDiv>
          <p>Codelândia</p>
          <p>blog</p>
        </TextDiv>
        <Search>
          <InputSearch placeholder="Pesquisar no blog" />
        </Search>
      </Section>
    </BoxHeader>
  );
}
export default Header;
