import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const [pathToRedirect, setPathToRedirect]= useState("/")
  const closeModal = () => {
    setisOpen(false);
  };
  const openModal = (pathToRedirect: string) =>{
    setisOpen(true);
    setPathToRedirect(pathToRedirect);
  }

  return {
    isOpen,
    closeModal, pathToRedirect, openModal
  };
}