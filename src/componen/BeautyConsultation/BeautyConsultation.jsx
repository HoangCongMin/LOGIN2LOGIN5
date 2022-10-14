import Animation11 from '../../aces/Img/Animation11.png'
import Animation2 from'../../aces/Img/Animation2-1.png'
import Animation3 from'../../aces/Img/Animation3-1.png'
import style from'./BeautyConsultation.module.css'
import {FaAngleDoubleRight } from 'react-icons/fa'
import clsx from'clsx'



function BeautyConsultation() {
    return(
        <div>
            <div className={clsx(style.BeautyConsultation)}>
                <img src={Animation11} alt="" />
                <div className={clsx(style.BeautyConsultationtwo)}>
                    <h5>Beauty Consultation</h5>
                    <h1>We services beauty consultation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero.</p>
                    <div className={clsx(style.BeautyConsultationthree)} >
                        <h5>Make an Appointment </h5>
                        <span><FaAngleDoubleRight/></span>
                        
                        </div>
                </div>
            </div>
            <div className={clsx(style.BeautyConsultationmid)}>
                <div className={clsx(style.BeautyConsultationtwo)}>
                    <h5>Skin Treatements</h5>
                    <h1>Skin care and treatment by expert</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero.</p>
                    <div className={clsx(style.BeautyConsultationthree)} >
                        <h5>Make an Appointment </h5>
                        <span><FaAngleDoubleRight/></span>
                        
                        </div>
                </div>
                <img src={Animation2} alt="" />
            </div>
            <div className={clsx(style.BeautyConsultation)}>
                <img src={Animation3} alt="" />
                <div className={clsx(style.BeautyConsultationtwo)}>
                    <h5>Beauty Product</h5>
                    <h1>We present quality beauty products</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero.</p>
                    <div className={clsx(style.BeautyConsultationthree)} >
                        <h5>Make an Appointment </h5>
                        <span><FaAngleDoubleRight/></span>
                        
                        </div>
                </div>
            </div>
        </div>
    )
}

export default BeautyConsultation