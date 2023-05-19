import styled, { css, keyframes } from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 2%;
  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 5%;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  margin-top: 2%;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const buttonStyles = css`
  background-color: transparent;
  padding: 10px;
  border: none;
  cursor: pointer;

  svg {
    width: 55px;
    height: 55px;
    fill: #64eebc;
    &:hover {
      transform: scale(1.3);
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    svg {
      fill: grey;
    }
  }
`;

export const ButtonUp = styled.button`
  ${buttonStyles}
`;

export const ButtonDown = styled.button`
  ${buttonStyles}
`;

export const slideInAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const MovieCard = styled.div`
  border-radius: 4px;
  background-image: url(${(props) => props.bcndimage});
  background-size: cover;
  width: 17vw;
  height: 12vh;
  margin: 3%;
  padding: 5%;
  animation: ${slideInAnimation} 0.5s ease-in-out
    ${(props) => props.index * 0.1}s both;

  @media (max-width: 767px) {
    width: 60vw;
    height: 30vh;
  }
  &:hover {
    background-image: linear-gradient(
        rgba(36, 36, 36, 0.7),
        rgba(36, 36, 36, 0.7)
      ),
      url(${(props) => props.bcndimage});

    #title {
      display: none;
    }
    #titleHover {
      margin-left: 5%;
    }
    #MovieCtr {
      flex-direction: row;
      height: 90%;
    }
    #starsCtnr {
      display: flex;
    }
    #playButton{
      width: 14%;
    }
  }
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const PlayCtnr = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-family: "Bebas Neue";
  font-weight: 400;
  width: 100%;
  color: #ffffff;
  display: none;
  letter-spacing: 2px;
  justify-content: space-around;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const playButtonStyles = css`
  box-sizing: border-box;
  margin: auto;
  border: none;
  background: transparent;
  cursor: pointer;
  svg {
    width: 100%;
      height: 100%;
  }
  &:hover {
    svg {
      background: none;
      
      circle {
        fill: #64eebc;
        stroke: #242424;
        fill-opacity: 1;
      }
      path {
        fill: #242424;
        stroke: #242424;
      }
    }
  }
`;

export const PlayMovieButton = styled.button`
  ${playButtonStyles};
width: 20%;
  
  @media (max-width: 767px) {
    width: 22%;
  }
`;

export const PlayMovieHover = styled.button`
  ${playButtonStyles};
`;

export const MovieTitle = styled.div`
  width: 100%;
  font-family: "Bebas Neue";
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  letter-spacing: 4px;
  color: #ffffff;

  transition: bottom 0.3s ease-in-out;
  @media (max-width: 767px) {
    font-size: 25px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 12px;
  }
`;

export const MovieStars = styled.div`
  font-family: "Bebas Neue";
  font-weight: 400;
  width: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  svg {
    width: 15px;
    height: 15px;
    margin-right: 5%;
  }
`;
