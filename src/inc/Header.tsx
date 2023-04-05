import AppContext from "@/context/AppContext";
import React,{ useContext } from "react";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";

export default function Header(){

    const { asideisOpen, setAsideisOpen, mobileCheck } = useContext(AppContext);

    return(
        <header>

            <div className='left'>
                <button onClick={ () => setAsideisOpen(!asideisOpen) } className='btn-toggle'>
                    {
                        asideisOpen ? <FontAwesomeIcon icon={faArrowLeft}/> : <FontAwesomeIcon icon={faBars}/>
                    }
                </button>
                <h1 className='logo'>
                    <Link href='/'>
                        {
                            mobileCheck ? <Image src='./img/logo_type01.svg' width={120} height={60} alt="대단한컴퍼니"/> : <Image src='./img/logo_type01.svg' width={160} height={80} alt="대단한컴퍼니"/>
                        }
                        
                    </Link>
                </h1>
            </div> 
            
            <div className="profile-wrap">
                <p>Admin_1</p>
                <button className="btn sm"><FontAwesomeIcon icon={faPowerOff}/></button>
            </div>
        </header>
    )

}