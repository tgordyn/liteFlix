import { createContext, useState } from "react";

const defaultValue = {
  modalOpen: false,
  setModalOpen: () => {},
};

export const addMoviesContext = createContext(defaultValue);

const AddMoviesContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <addMoviesContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </addMoviesContext.Provider>
  );
};

export default AddMoviesContextProvider;
