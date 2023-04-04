import AppContext from "@/context/AppContext";
import React,{ useContext } from "react";

export default function Header(){

    const { asideisOpen,setAsideisOpen, mobileCheck} = useContext(AppContext);

    // const asideHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     setAsideisOpen(!asideisOpen);
    //     document.body.classList.add('no-scroll'); 
    // };

    return(
        <header>
            <button onClick={ () => setAsideisOpen(!asideisOpen) }>토글</button>
            <h1>대단한컴퍼니</h1>
            <div className="profile-wrap">
                <button >로그아웃</button>
            </div>
        </header>
    )

}