import React, { useEffect, useState } from 'react'
import './Nav.css'

import { useNavigate } from 'react-router-dom';


function Nav() {



    const navigate = useNavigate();
        const [show,handleShow]=useState(false);

        const transitionNavBar =()=>{
            if(window.scrollY>100){
                handleShow(true)
            } else{
                handleShow(false)
            }
        }
        useEffect(()=>{
            window.addEventListener('scroll',transitionNavBar);
            return () => window.removeEventListener('scroll',transitionNavBar);
        },[])

    return (
        <div className={`nav ${show && 'nav__black'}`}> 
        {/* if show true show blacl navbar */}
            <div className='nav__contents'>
                <img onClick={()=>navigate('/')}
                className='nav__logo' src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='' />

                <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <img onClick={()=>navigate('/FavouriteScreen')} 
                className='nav__watchlist' src="https://cdn2.iconfinder.com/data/icons/shopping-cart-special/78/21-512.png" alt="" />
                

            </div>

        </div>
    )
}

export default Nav

// https://cdn4.iconfinder.com/data/icons/web-interface-10/512/823-02-512.png