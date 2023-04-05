import React, { useState, useContext, useRef, useEffect } from "react";
import AppContext from "@/context/AppContext";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faHouseChimney,faLaptopFile , faHandshakeSimple , faBell ,faPowerOff} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';

export default function Aside() {

  const { asideisOpen, setAsideisOpen , mobileCheck } = useContext(AppContext);

  const asideRef = useRef<HTMLDivElement>(null);
  const { query } = useRouter();
  const pid = String(query.pid);

  const clickhandler = () => {
    if(mobileCheck){
      setAsideisOpen(!asideisOpen);
    }
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (asideRef.current && !asideRef.current.contains(e.target as Node)) {
      setAsideisOpen(false);
    }
  };

  useEffect(() => {
    if (asideisOpen) {
      if(mobileCheck){
        document.body.classList.add("no-scroll");
        document.addEventListener("mousedown", handleClickOutside);
      }
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
    <aside ref={asideRef}>
      <button onClick={ () => setAsideisOpen(!asideisOpen) } className='btn-toggle m-only'>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      {/* 사이드네비 메뉴 */}
      <div className='aside-menus-container'>
        <ul className='aside-menus-wrap'>
          <li><Link href='/home' onClick={ clickhandler } className={pid === 'home' ? 'on' : ''}><FontAwesomeIcon icon={ faHouseChimney }/><span>Home</span></Link></li>
          <li><Link href='/portfolio' onClick={ clickhandler } className={pid === 'portfolio' ? 'on' : ''}><FontAwesomeIcon icon={ faLaptopFile }/><span>Portfolio</span></Link></li>
          <li><Link href='/notice' onClick={ clickhandler } className={pid === 'notice' ? 'on' : ''}><FontAwesomeIcon icon={ faBell }/><span>Notice</span></Link></li>
          <li><Link href='/contact' onClick={ clickhandler } className={pid === 'contact' ? 'on' : ''}><FontAwesomeIcon icon={ faHandshakeSimple }/><span>Contact</span></Link></li>
        </ul>
      </div>
       {/* 로그아웃 및 카피라이트 */}
       <div className='aside-footer'>
        <ul className='utills'>
          <li><button className="btn sm"><FontAwesomeIcon icon={faPowerOff}/><span>로그아웃</span></button></li>
        </ul>
        <p className='copy'>
          {asideisOpen && !mobileCheck ?  '© 2023. 대단한컴퍼니 Inc. all rights reserved.': '© GC.'}
          
        </p>
      </div>
    </aside>
  );
}