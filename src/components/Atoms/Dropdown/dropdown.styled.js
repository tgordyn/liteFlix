import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../svg-icons/arrow.svg";

export const Dropdowncontainer = styled.div`
  font-family: "Bebas Neue";
  color: #ffffff;
  size: 18px;
  position: relative;
  display: inline-block;
  z-index: 1;
  margin-left: 11%;
`;

export const TitleCtnr = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: "Bebas Neue";
  color: #ffffff;
  letter-spacing: 4px;
  width: 20vw;
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    transform: scale(1.3);
  }
  @media (max-width: 767px) {
    width: 40vw;
    font-size: 20px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 400;
  margin-right: 2%;
`;

export const ArrowIcon = styled(Arrow)`
  margin-left: 5%;
  width: 2vw;
`;

export const SelectedValue = styled.span`
  font-weight: 700;
  margin-right: 2%;
`;

export const DropdownSelect = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;
  font-family: "Bebas Neue";
  color: #ffffff;
  font-size: 16px;
  position: absolute;
  height: 7vh;
  width: 20vw;
  letter-spacing: 4px;
  @media (max-width: 767px) {
    width: 40vw;
    font-size: 20px;
  }

`;

export const DropdownOption = styled.p`
  font-family: "Bebas Neue";
  background: #242424;
  color: #ffffff;
  cursor: pointer;
  height: 70%;
  padding: 5% 10%;
  justify-content: space-between;
  display: flex;
  font-weight: ${(props) => (props.boldstyle ? props.boldstyle : "400")};

  &:hover {
    //transform: scale(1.1);
    letter-spacing: 0.3em;

  }
`;
