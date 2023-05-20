import styled, { css, keyframes } from "styled-components";
import "@fontsource/bebas-neue";
import { ReactComponent as Play } from "../../svg-icons/play.svg";
import { ReactComponent as Plus } from "../../svg-icons/plus.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fontMixin = css`
  font-family: "Bebas Neue";
  letter-spacing: 4px;
`;

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bcndimage});
  background-size: cover;
  animation: ${fadeIn} 0.8s ease-in-out;

  @media (max-width: 767px) {
    background-position: center;
    background-image: linear-gradient(
        to bottom,
        transparent,
        rgba(0, 0, 0, 0.9)
      ),
      url(${(props) => props.bcndimage});
  }
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  ${fontMixin};
  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  ${fontMixin};
  @media (max-width: 767px) {
    height: auto;
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 20%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 60%;
  }
`;

export const MoviedDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 15%;
  left: 6%;
  right: 30%;
  justify-content: center;
  height: auto;
  ${fontMixin};
  @media (max-width: 767px) {
    top: none;
    left: none;
    right: none;
    bottom: none;
    position: inherit;
    align-items: center;
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 20%;
    bottom: none;
    height: auto;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 4px;
  color: #ffffff;
  animation: ${slideIn} 0.7s ease-in-out;
  @media (max-width: 767px) {
    width: 100%;
    font-size: 40px;
    margin-bottom: 15%;
  }
  @media (max-width: 550px) {
    font-size: 30px;
  }
`;

export const MovieTitle = styled.div`
  font-size: ${(props) =>
    props.title.length > 15
      ? "3.5rem"
      : props.title.length < 5
      ? "6rem"
      : "5rem"};
  font-weight: 700;
  ${fontMixin};
  letter-spacing: 16px;
  text-transform: uppercase;
  color: #64eebc;
  animation: ${fadeIn} 0.8s ease-in-out;

  @media (max-width: 767px) {
    font-size: 64px;
    margin-top: 5%;
    letter-spacing: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${(props) =>
      props.title.length > 15
        ? "3rem"
        : props.title.length < 5
        ? "5rem"
        : "4rem"};
  }
  @media (max-width: 550px) {
    font-size: 45px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;

  @media (max-width: 767px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 5% 0;
  }
`;

export const buttonStyles = css`
  ${fontMixin};
  width: 35%;
  height: 7vh;
  color: #ffffff;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  animation: ${slideUp} 0.6s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    background-color: #3e8e41;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 8px #4caf50;
  }
  @media (max-width: 767px) {
    width: 70%;
    height: 9vh;
    margin-top: 4%;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const ReproduceButton = styled.button`
  border: none;
  background: #242424;
  ${buttonStyles};
`;

export const MyListButton = styled.button`
  background: rgba(36, 36, 36, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-left: 5%;
  ${buttonStyles};

  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

export const PlayIcon = styled(Play)`
  margin-right: 5%;
`;

export const Addicon = styled(Plus)`
  margin-right: 5%;
`;

export const RigthColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 2% 2% 0 2%;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0;
    background: #242424;
    padding-top: 5%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40%;
  }
`;
