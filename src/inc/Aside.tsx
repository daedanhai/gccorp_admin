import React, { useState, useContext, useRef, useEffect } from "react";
import AppContext from "@/context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Aside() {

  const { asideisOpen, setAsideisOpen , mobileCheck } = useContext(AppContext);

  const asideHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAsideisOpen(!asideisOpen);
    document.body.classList.remove("no-scroll");
  };

  const asideRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
      setAsideisOpen(false);
    }
  };

  const ddd = (e: MouseEvent) => {
    console.log('ddd')
  }

  useEffect(() => {
    if (asideisOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    };
  }, [asideisOpen]);

  return (
    <aside ref={asideRef} className={ asideisOpen === true ? "open" : "" }>
      <h2>어사이드</h2>
      <button onClick={ asideHandler }>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </aside>
  );
}