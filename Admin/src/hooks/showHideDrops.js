import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const useshowHideDrops = (ref, show, setShow) => {
  const [isOpen, setisopen] = useState(false);
  const dropRef = useRef(null);
  console.log(dropRef.current);
  const toggleMenu = () => {
    setisopen(!isOpen);
  };
  const handleClickOutSide = (e) => {
    if (dropRef?.current && !dropRef?.current.contains(e.target)) {
      setisopen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide);

    return () => {
      document.removeEventListener("click", handleClickOutSide);
    }
  }, []);

  return { isOpen, toggleMenu, dropRef };
};

export default useshowHideDrops;
