import styled from "styled-components";
import { ReactComponent as Plus } from "../../svg-icons/plus.svg";

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 35vw;
  height: 100vh;
  background-color: #242424;
  transition: transform 0.3s ease;
  transform: translateX(35vw);
  z-index: 2;

  &.open {
    transform: translateX(0);
  }
  @media (max-width: 767px) {
    width: 100%;
    transform: translateX(100%);

    #bellIconBtn {
      display: none;
    }
  }
  @media (min-width: 768px) {
    #liteflixLogo {
      display: none;
    }
  }
`;

export const Content = styled.div`
  padding: 5% 12%;
  @media (max-width: 767px) {
    padding: 3% 10%;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconButtonn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: auto;
  }
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding-top: 15%;
  color: #ffffff;
  letter-spacing: 4px;

  @media (max-width: 767px) {
    padding-top: 10%;
  }
`;

export const MenuItem = styled.li`
  padding-bottom: 10%;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    padding: 10% 0 20% 10%;
    transform: scale(1.3);
    &:first-child {
      padding: 0 0 20% 10%;
    }
  }
  @media (max-width: 767px) {
    padding-bottom: 6%;
    font-size: 14px;
  }
`;

export const Addicon = styled(Plus)`
  margin-right: 5%;
`;
