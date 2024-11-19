import React, { useState } from 'react'
import HedaerImage from "../../Assets/logo.png"
import "./Header.scoped.css"
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Header() {
const [isOpen , setOpen] = useState(false)
  window.onscroll = function(){
    var Header = document.getElementById("header")
      if(window.scrollY > 300){
        Header.classList.add("whenScroll")
      }else{
        Header.classList.remove("whenScroll")
      }
  }
  return (
 
    
    <>
    <header id='header'>
        <div className="container-lg">
            <div className="row align-items-center justify-content-between">
                <div className=" col-xl-2 col-2 col-md-3 col-lg-2  ">
                    <img src={HedaerImage} alt="header image about coffe" title='image cofe header' />
                </div>
                <div className=" col-xl-5 col-3 col-md-6 col-lg-5  align-itmes-center ">
                <GiHamburgerMenu className='hmb' size={"30px"} onClick={()=> setOpen(prev => !prev)} />
                  <nav className='nav' > 
                    <ul className={` ${isOpen? "opened" :"ppww"}`}>
                      <li><Link className='Link' to={""}>Home</Link></li>
                      <li><Link className='Link' to={""}>About</Link></li>
                      <li><Link className='Link' to={""}>Menu</Link></li>
                      <li className='dropListParent'><Link className='Link' to={""}>Services</Link>
                        <ul className='dropList'>
                          <li>service 1</li>
                          <li>service 2</li>
                        </ul>
                      </li>
                      <li><Link className='Link'>Contact</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-xl-2 col-2 col-lg-2 hiddenInMediaQueryy ">
                  <button className='btn btn-book'>
                  
Book Table
                  </button>
                </div>
            </div>
        </div>
    </header>
    
    
    </>
  )
}
