import style from'./Requestcallservices.module.css'
import clsx from'clsx'
import {FaPhoneVolume } from 'react-icons/fa'
import Elements from '../../aces/Img/BG-Elements.png'



function Requestcallservices(){
    return(
        <div className={clsx(style.Requestcallservices)}>
            <img className={clsx(style.Elements)} src={Elements} alt="" />
            <div className={clsx(style.Requestcallservicesall)}>
                <h1>Request call services</h1>
                <p>Lorem ipsum dolor sit amet, consect <br /> adipiscing elit <span> Contact Us </span>.</p>
                
            </div>
            <div className={clsx(style.Requestcallservicesinput)}>
                <div className={clsx(style.RequestInsert)}>
               <input type="text" placeholder="Insert your phone number here ..."/>
               <button className={clsx(style.RequestInsertbutton)}><FaPhoneVolume/></button>
               </div>
               <p>Toll free for our coverage areas.</p>

            </div>

        </div>
    )
}

export default Requestcallservices