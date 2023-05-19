import styled, { css } from "styled-components";
import { ReactComponent as IconClip } from "../../svg-icons/clip.svg";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  background-color: #242424;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  display: flex;
  flex-direction: column;
  padding: 2%;
  visibility: "visible";
  opacity: 1;

  .progress-bar {
    width: 100%;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: 10px;
  }

  .progress-bar-fill {
    height: 10px;
    background-color: #64eebc;
    width: 0;
  }
  backdrop-filter: blur(8px);

  @media (max-width: 767px) {
    height: 100vh;
    width: 100vw;
  }

  @media (min-width: 768px) {
    #salirButton {
      display: none;
    }
  }
`;
export const IconContainer = styled.div`
  margin-left: auto;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5% 8%;
    width: 84%;
    #closeIconBtn {
      display: none;
    }
  }
  @media (min-width: 768px) {
    #menuBtnMobile {
      display: none;
    }
    #liteflixLogo {
      display: none;
    }
    #profileBtnMobile {
      display: none;
    }
  }
`;

export const ModalContent = styled.form`
  padding: 1% 4% 0 4%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 767px) {
    padding: 8%;
  }
`;

export const ModalTitle = styled.span`
  text-align: center;
  font-family: "Bebas Neue";
  font-size: 22px;
  font-weight: 700;
  color: #64eebc;
  letter-spacing: 4px;
`;

export const DropZone = styled.div`
  border: 1px dashed #ffffff;
  width: 100%;
  height: 10vh;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  letter-spacing: 4px;
  color: #ffffff;
  margin-top: 8%;
  @media (max-width: 767px) {
    margin-top: 12%;
  }
`;

export const TitledDropZone = styled.div`
  margin: auto 0;
  display: flex;
  font-size: 14px;
  text-align: center;
  padding: 5%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const LargerDropTitle = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ClipIcon = styled(IconClip)`
  width: 16px;
  height: 16px;
`;

export const LoadingMessage = styled.div`
  text-align: left;
  color: #ffffff;
  letter-spacing: 4px;
  font-size: 12px;
  width: 100%;
`;

export const ConfirmationMessage = styled.div`
  text-align: right;
  color: #ffffff;
  letter-spacing: 4px;
  font-size: 14px;
  width: 100%;
  margin-top: 3%;

  &:hover {
    font-size: 1.1em;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  outline: none;
  width: 50%;
  margin-top: 6%;
  text-align: center;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  letter-spacing: 4px;

  &::placeholder {
    font-weight: 400;
    color: #ffffff;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const buttonStyles = css`
  display: block;
  margin: 0 auto;
  padding: 3% 10%;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  outline: none;
  letter-spacing: 4px;
  width: 50%;
  cursor: pointer;
  margin-top: 4%;

  &:hover,
  &:focus {
    transform: scale(1.3);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const SubmitBtnCtn = styled.div`
  margin-top: 5%;
  width: 100%;
  @media (max-width: 767px) {
    margin-top: 12%;
  }
`;

export const SubmitButton = styled.button`
  ${buttonStyles}
  background-color: #FFFFFF;
  border: none;
  color: #242424;

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const CloseMobileButton = styled.button`
  ${buttonStyles}
  background: rgba(36, 36, 36, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
`;

export const SuccessContainer = styled.div`
  padding: 1% 4%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 767px) {
    #liteflixLogo {
      display: none;
    }
  }
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 4px;
  color: #ffffff;
  margin-bottom: 5%;
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
  width: 35%;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: auto;
  }
`;
