import React from "react";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #64eebc;
  font-family: "Bebas Neue";
  font-size: 34px;
  letter-spacing: 4px;
`;

export const FirstPartLogo = styled.span`
  font-weight: 900;
`;

export const SecondPartLogo = styled.span`
  font-weight: 400;
`;

const LogoLiteFlix = () => {
  return (
    <LogoContainer id="liteflixLogo">
      <FirstPartLogo>LITE</FirstPartLogo>
      <SecondPartLogo>FLIX</SecondPartLogo>
    </LogoContainer>
  );
};
export default LogoLiteFlix;
