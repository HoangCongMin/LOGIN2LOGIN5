import clsx from'clsx'
import style from'./Mainsvnew.module.css'
import icon2 from'../../aces/Img/icon-2.png'
import icon1 from'../../aces/Img/icon-1.png'
import icon3 from '../../aces/Img/icon-3.png'
import {FaAngleDoubleRight } from 'react-icons/fa'
import Wave from '../../aces/Img/Wave Line.png'
import handshake from '../../aces/Img/handshake 1.png'
import brotherhood from '../../aces/Img/brotherhood 1.png'
import earth from '../../aces/Img/earth 1.png'
import doctor from'../../aces/Img/doctor 1.png'


function Mainsvnew () {
    return(
        <div>
            <div className={clsx(style.Mainsvnew)} >
               <h5>Main Services</h5>
               <h1>Our focus services</h1>
               <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className={clsx(style.Mainsvnewone)}>
                
                <div className={clsx(style.Mainsvnewoneitem)}>
                    <div className={clsx(style.maiall)}>
                    <img src={icon1} alt="" />
                    <h5>Beauty consultation</h5>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.</p>
                    </div>
                    <div className={clsx(style.Mainsvtitle)}>
                       <h6>Learn more</h6> <span><FaAngleDoubleRight/></span>
                    </div>
                </div>
                <div className={clsx(style.Mainsvnewoneitem)}>
                <div className={clsx(style.maiall)}>
                    <img src={icon2} alt="" />
                    <h5>Skin treatments</h5>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.</p>
                    </div>
                    <div className={clsx(style.Mainsvtitle)}>
                       <h6>Learn more</h6> <span><FaAngleDoubleRight/></span>
                    </div>
                </div>
                <div className={clsx(style.Mainsvnewoneitem)}>
                <div className={clsx(style.maiall)}>
                     <img src={icon3} alt="" />
                     <h5>Beauty product</h5>
                     <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.</p>
                     </div>
                     <div className={clsx(style.Mainsvtitle)}>
                        <h6>Learn more</h6> <span><FaAngleDoubleRight/></span>
                      </div>
                </div>
                <img className={clsx(style.Wave)} src={Wave} alt="" />
 
            </div>


        <div className={clsx(style.backgrondMainsvnew)}>
            <div className={clsx(style.choosing)}>
              <div className={clsx(style.Whychoosing)}>
                <h1>Why choosing us?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet luctus <br /> venenatis.</p>
              </div>
              <div className={clsx(style.trustedclinicone)}>
              <div className={clsx(style.trustedclinic)}>
                 <div className={clsx(style.trust)}>
                    <img src={handshake} alt="" />
                    <div className={clsx(style.content)}>
                       <h1>100%</h1>
                        <h5 className={clsx(style.contenth5)}>trusted clinic</h5>
                    </div>
                 </div>
                 <div className={clsx(style.trust)}>
                    <img src={brotherhood} alt="" />
                    <div className={clsx(style.content)}>
                       <h1>99%</h1>
                        <h5 className={clsx(style.contentlove)}>customer love</h5>
                    </div>
                    
                 </div>

             </div>


             <div className={clsx(style.trustedclinictow)}>
                 <div className={clsx(style.trust)}>
                    <img src={earth} alt="" />
                    <div className={clsx(style.content)}>
                       <h1>75+</h1>
                        <h5 className={clsx(style.contentlove)}>asian branch</h5>
                    </div>
                 </div>
                 <div className={clsx(style.trust)}>
                    <img src={doctor} alt="" />
                    <div className={clsx(style.content)}>
                       <h1>1.200+</h1>
                        <h5 className={clsx(style.contentlove)}>licensed worker</h5>
                    </div>
                    
                 </div>

             </div>
             </div>
             
            </div>  
        </div>

        </div>
    )
}

export default Mainsvnew