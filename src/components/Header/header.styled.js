import styled from "styled-components";
import { ReactComponent as Plus } from "../../svg-icons/plus.svg";

export const Headercontainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 2% 6% 0 6%;
  background: transparent;
  justify-content: space-between;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 60%;
  }
`;

export const AddMovie = styled.button`
  font-family: "Bebas Neue";
  font-size: 16px;
  letter-spacing: 4px;
  color: #ffffff;
  margin-left: 10%;
  background: transparent;
  border: none;
  outline: none;
  width: 40%;
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    width: 50%;
  }

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const Addicon = styled(Plus)`
  margin-right: 5%;
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
    #bellIconBtn {
      display: none;
    }
  }
  @media (min-width: 767px) {
    #liteflixLogo {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 25%;
  }
`;
