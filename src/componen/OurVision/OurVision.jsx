import clsx from'clsx'
import style from'./OurVision.module.css'
import Illustration from '../../aces/Img/Illustration-1.png'
import Illustration2 from'../../aces/Img/Illustration-2.png'
import LOGO1 from'../../aces/Img/LOGO1.png'
import LOGO2 from'../../aces/Img/LOGO2.png'
import LOGO3 from'../../aces/Img/LOGO3.png'
import LOGO4 from'../../aces/Img/LOGO4.png'
import LOGO5 from'../../aces/Img/LOGO5.png'
import backgrondour from'../../aces/Img/Bubble BGFooter.png'

function OurVision(){
    return(<>

    <div className={clsx(style.Vision)} >
    <img src={backgrondour} className={clsx(style.backgrondour)} alt="" />

        <div className={clsx(style.OurVision)}>
        <div>
            <img src={Illustration} alt=""  className={clsx(style.Visionimg)}/>
        </div>
        <div>
            <h5 className={clsx(style.OurVisionh5)}>Our Vision</h5>
            <h1 className={clsx(style.OurVisionh1)}>Be the best and go <br />  international</h1>
            <p className={clsx(style.OurVisionhp)}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero. <br /><br /> Nunc, ipsum ornare mauris sit quam quis enim. <br /> Varius tellus in suspendisse placerat.</p>
        </div>

    </div>
    <div className={clsx(style.OurVision)}>
        <div>
    <h5 className={clsx(style.OurVisionh5)}>Our Mission</h5>
        <h1 className={clsx(style.OurVisionh1)}>Special & premium service <br /> to any clients</h1>
        <p className={clsx(style.OurVisionhp)}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero. <br /><br /> Nunc, ipsum ornare mauris sit quam quis enim. <br /> Varius tellus in suspendisse placerat.</p> 
        </div>   
        <div><img src={Illustration2} alt=""  className={clsx(style.Visionimg)}/></div>

    </div>


    <div className={clsx(style.Clients)}><h5 className={clsx(style.OurVisionh5)}>Our Clients</h5>
         <h1>Well-known agencies</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
    <div className={clsx(style.LOGO)}>
        <img src={LOGO1} alt="" />
        <img src={LOGO2} alt="" />
        <img src={LOGO3} alt="" />
        <img src={LOGO4} alt="" />
        <img src={LOGO5} alt="" />
    </div>

</div> </>)
}

export default OurVision