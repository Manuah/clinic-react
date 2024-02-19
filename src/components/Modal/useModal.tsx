import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);
  const [pathToRedirect, setPathToRedirect]= useState("/")
  const toggle = () => {
    setisOpen(!isOpen);
  };
  const openModal = (pathToRedirect: string) =>{
    setisOpen(true);
    setPathToRedirect(pathToRedirect);
  }

  return {
    isOpen,
    toggle, pathToRedirect, openModal
  };
}