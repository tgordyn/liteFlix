import { createContext, useState } from "react";

const defaultValue = {
  isOpen: false,
  setIsOpen: () => {},
};
export const hamburgerMenuContext = createContext(defaultValue);

const HamburgerMenucontextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <hamburgerMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </hamburgerMenuContext.Provider>
  );
};

export default HamburgerMenucontextProvider;
