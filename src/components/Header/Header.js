import React, { useContext } from "react";
import { ReactComponent as BellIcon } from "../../svg-icons/bell.svg";
import { ReactComponent as ProfileIcon } from "../../svg-icons/profile.svg";
import { ReactComponent as Menu } from "../../svg-icons/menu.svg";
import LogoLiteFlix from "../Atoms/LogoLiteFlix";
import IconButtonn from "../Atoms/IconButton";
import { hamburgerMenuContext } from "../../contexts/HamburgerMenuContext";
import { addMoviesContext } from "../../contexts/AddMoviesContext";
import {
  Headercontainer,
  LeftSideContainer,
  AddMovie,
  Addicon,
  RightSideContainer,
} from "./header.styled";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(hamburgerMenuContext);
  const { modalOpen, setModalOpen } = useContext(addMoviesContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Headercontainer>
      <LeftSideContainer>
        <LogoLiteFlix />
        <AddMovie onClick={handleModalToggle}>
          <Addicon />
          AGREGAR PELICULA
        </AddMovie>
      </LeftSideContainer>
      <RightSideContainer>
        <IconButtonn icon={Menu} onButtonClick={handleToggle} />
        <LogoLiteFlix />
        <IconButtonn icon={BellIcon} idE={"bellIconBtn"} />
        <IconButtonn icon={ProfileIcon} />
      </RightSideContainer>
    </Headercontainer>
  );
};

export default Header;
