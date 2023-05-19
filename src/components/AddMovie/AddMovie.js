import React, { useState, useContext, useEffect } from "react";
import { addMoviesContext } from "../../contexts/AddMoviesContext";
import { hamburgerMenuContext } from "../../contexts/HamburgerMenuContext";
import { localStorageContext } from "../../contexts/LocalStorageContext";
import { ReactComponent as Menu } from "../../svg-icons/menu.svg";
import { ReactComponent as ProfileIcon } from "../../svg-icons/profile.svg";
import IconButton from "../Atoms/IconButton";
import { ReactComponent as IconClose } from "../../svg-icons/cerrar.svg";
import LogoLiteFlix from "../Atoms/LogoLiteFlix";
import { updateLocalStorageData } from "../../utils/constants";
import {
  ModalContainer,
  IconContainer,
  ModalContent,
  ModalTitle,
  DropZone,
  LargerDropTitle,
  ClipIcon,
  TitledDropZone,
  LoadingMessage,
  ConfirmationMessage,
  NameInput,
  SuccessContainer,
  SuccessMessage,
  SubmitBtnCtn,
  SubmitButton,
  CloseMobileButton,
} from "./addMovie.styled";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const dataFilled = name.length > 0 && image.length > 0;
  const [loadingFile, setLoadingFile] = useState(false);
  const { modalOpen, setModalOpen } = useContext(addMoviesContext);
  const { setIsOpen } = useContext(hamburgerMenuContext);
  const { setLocalStorageMovieData } = useContext(localStorageContext);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [updateFailed, setUpdateFailed] = useState(false);
  const [uploadedTitle, setUploadedTitle] = useState("");

  // Add or remove a Class to the body if modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);

  if (!modalOpen) return null;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Logic to upload file and show progress bar percentage
  const uploadFile = (file) => {
    setLoadingFile(true);
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", function (event) {
      const percentComplete = (event.loaded / event.total) * 100;
      setProgress(percentComplete);
    });
    xhr.addEventListener("error", function () {
      setLoadingFile(false);
      setUpdateFailed(true);
    });

    xhr.open("POST", "YOUR_UPLOAD_URL");
    xhr.send(file);
  };

  // Closing Modal and setting the state
  const handleModalClose = () => {
    setModalOpen(false);
    setLoadingFile(false);
    setName("");
    setImage("");
    setUploaded(false);
    setUpdateFailed(false);
  };

  const handleMenuOpen = () => {
    handleModalClose();
    setIsOpen(true);
  };

  const handleRetry = () => {
    handleModalClose();
    setModalOpen(true);
  };

  // Handling image put in Drop zone
  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    uploadFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create movie object
    const movie = {
      name,
      image,
      dateCreated: new Date().toISOString(),
    };
    const movieKey = `movie${movie.name}`;
    // Store user data in local storage
    localStorage.setItem(movieKey, JSON.stringify(movie));

    // Set variables and state and clear form fields
    setLocalStorageMovieData(updateLocalStorageData());
    setUploadedTitle(movie.name);
    setName("");
    setImage("");
    setUploaded(true);
  };

  return (
    <ModalContainer onSubmit={handleSubmit}>
      <IconContainer>
        <IconButton
          icon={IconClose}
          onButtonClick={handleModalClose}
          idE={"closeIconBtn"}
        />
        <IconButton
          icon={Menu}
          onButtonClick={handleMenuOpen}
          idE={"menuBtnMobile"}
        />
        <LogoLiteFlix />
        <IconButton icon={ProfileIcon} idE={"profileBtnMobile"} />
      </IconContainer>
      {!uploaded ? (
        <ModalContent>
          <ModalTitle>AGREGAR PELICULA</ModalTitle>
          {loadingFile ? (
            <div style={{ marginTop: "10%", width: "100%" }}>
              {progress === 100 ? (
                <LoadingMessage>%100 CARGADO</LoadingMessage>
              ) : (
                <LoadingMessage>CARGANDO{progress}%</LoadingMessage>
              )}
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  id="progress-bar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {progress === 100 ? (
                <ConfirmationMessage style={{ color: "#64EEBC" }}>
                  ¡LISTO!
                </ConfirmationMessage>
              ) : (
                <ConfirmationMessage role="button" onClick={handleModalClose}>
                  CANCELAR
                </ConfirmationMessage>
              )}
            </div>
          ) : updateFailed ? (
            <div style={{ marginTop: "10%", width: "100%" }}>
              <LoadingMessage>
                ¡ERROR! NO SE PUDO CARGAR LA PELICULA
              </LoadingMessage>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  id="progress-bar-fill"
                  style={{ width: "100%", backgroundColor: "#FF0000" }}
                ></div>
              </div>
              <ConfirmationMessage role="button" onClick={handleRetry}>
                REINTENTAR
              </ConfirmationMessage>
            </div>
          ) : (
            <DropZone
              className="dropzone"
              onDrop={handleImageDrop}
              onDragOver={handleImageDragOver}
            >
              <TitledDropZone>
                <ClipIcon />
                <p>
                  &nbsp;AGREGÁ UN ARCHIVO
                  <LargerDropTitle>
                    &nbsp;O ARRASTRALO Y SOLTALO AQUÍ
                  </LargerDropTitle>
                </p>
              </TitledDropZone>
            </DropZone>
          )}
          <NameInput
            type="text"
            placeholder="TÍTULO"
            value={name}
            onChange={handleNameChange}
          />
          <SubmitBtnCtn>
            <SubmitButton type="submit" disabled={!dataFilled}>
              SUBIR PELÍCULA
            </SubmitButton>
            <CloseMobileButton onClick={handleModalClose} id="salirButton">
              SALIR
            </CloseMobileButton>
          </SubmitBtnCtn>
        </ModalContent>
      ) : (
        <SuccessContainer>
          <LogoLiteFlix />
          <div
            style={{
              marginTop: "10%",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SuccessMessage>¡FELICITACIONES!</SuccessMessage>
            <SuccessMessage>
              {uploadedTitle}&nbsp;FUE CORRECTAMENTE SUBIDA
            </SuccessMessage>
          </div>
          <SubmitButton onClick={handleModalClose}>IR A HOME</SubmitButton>
        </SuccessContainer>
      )}
    </ModalContainer>
  );
};

export default AddMovie;
