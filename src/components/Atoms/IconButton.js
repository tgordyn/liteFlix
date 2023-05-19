import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(1.3);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

const IconButton = ({ icon: Component, onButtonClick, idE }) => {
  const handleClick = () => {
    if (typeof onButtonClick === "function") {
      onButtonClick();
    }
  };
  return (
    <Button onClick={handleClick} id={idE}>
      <Component />
    </Button>
  );
};

export default IconButton;
