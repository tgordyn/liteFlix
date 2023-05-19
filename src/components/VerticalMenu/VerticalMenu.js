import React, { useContext, useEffect } from "react";
import LogoLiteFlix from "../Atoms/LogoLiteFlix.js";
import IconButton from "../Atoms/IconButton";
import { ReactComponent as CloseIcon } from "../../svg-icons/cerrar.svg";
import { ReactComponent as BellIcon } from "../../svg-icons/bell.svg";
import { ReactComponent as ProfileIcon } from "../../svg-icons/profile.svg";
import { hamburgerMenuContext } from "../../contexts/HamburgerMenuContext";
import { addMoviesContext } from "../../contexts/AddMoviesContext";
import {
  MenuContainer,
  Content,
  IconsContainer,
  RightIcons,
  MenuList,
  MenuItem,
  Addicon,
} from "./verticalMenu.styled";

const VerticalMenu = () => {
  const { isOpen, setIsOpen } = useContext(hamburgerMenuContext);
  const { setModalOpen } = useContext(addMoviesContext);

  const handleClose = () => {
    setIsOpen(false);
  };

  const dummyAction = () => {
    handleClose();
  };

  const handleAddMovie = () => {
    handleClose();
    setModalOpen(true);
  };

  // Add or remove a Class to the body if menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  return (
    <MenuContainer className={`vertical-menu ${isOpen ? "open" : ""}`}>
      <Content>
        <IconsContainer>
          <IconButton icon={CloseIcon} onButtonClick={handleClose}/>
          <LogoLiteFlix/>
          <RightIcons>
          <IconButton icon={BellIcon} idE="bellIconBtn"/>
            <IconButton icon={ProfileIcon} />
          </RightIcons>
        </IconsContainer>
        <MenuList>
          <MenuItem role="button" onClick={dummyAction}>
            INICIO
          </MenuItem>
          <MenuItem role="button" onClick={dummyAction}>
            SERIES
          </MenuItem>
          <MenuItem role="button" onClick={dummyAction}>
            PELICULAS
          </MenuItem>
          <MenuItem role="button" onClick={dummyAction}>
            AGREGADAS RECIENTEMENTE
          </MenuItem>
          <MenuItem role="button" onClick={dummyAction}>
            POPULARES
          </MenuItem>
          <MenuItem role="button" onClick={dummyAction}>
            MIS PELICULAS
          </MenuItem>
          <MenuItem role="button" onClick={dummyAction}>
            MI LISTA
          </MenuItem>
          <MenuItem role="button" onClick={handleAddMovie}>
            <Addicon />
            AGREGAR PELICULA
          </MenuItem>
          <MenuItem role="button" onClick={dummyAction}>
            CERRAR SESION
          </MenuItem>
        </MenuList>
      </Content>
    </MenuContainer>
  );
};

export default VerticalMenu;
