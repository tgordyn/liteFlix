import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Selected } from "../../../svg-icons/selected.svg";
import {
  Dropdowncontainer,
  TitleCtnr,
  TitleSpan,
  ArrowIcon,
  SelectedValue,
  DropdownSelect,
  DropdownOption,
} from "./dropdown.styled";

const Dropdown = ({ selectedValue, onSelectChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedIcon(value);
    onSelectChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedIcon(selectedValue);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedValue]);

  return (
    <Dropdowncontainer ref={dropdownRef}>
      <TitleCtnr onClick={handleToggle}>
        <TitleSpan>VER:</TitleSpan>
        <SelectedValue>{selectedValue}</SelectedValue>
        <ArrowIcon />
      </TitleCtnr>
      {isOpen && (
        <DropdownSelect>
          {/* <option value="">Seleccione una opción</option> */}
          <DropdownOption
            bold={selectedValue === "POPULARES" ? "700" : "400"}
            onClick={() => handleOptionClick("POPULARES")}
          >
            POPULARES
            {selectedIcon === "POPULARES" && <Selected />}
          </DropdownOption>
          <DropdownOption
            boldstyle={selectedValue === "MIS PELICULAS" ? "700" : "400"}
            onClick={() => handleOptionClick("MIS PELICULAS")}
          >
            MIS PELICULAS
            {selectedIcon === "MIS PELICULAS" && <Selected />}
          </DropdownOption>
        </DropdownSelect>
      )}
    </Dropdowncontainer>
  );
};

export default Dropdown;
