import style from'./OurServices.module.css'
import clsx from'clsx'
import Bubble from'../../aces/Img/Bubble BG-1.png'
import imgOurServices1 from'../../aces/Img/imgOurServices1.5b4ae070b9c83610f333.png'
import unsplash_ZOT2Mewzmh8 from '../../aces/Img/unsplash_ZOT2Mewzmh8.png'
import unsplash_gzfIO69Q6eM from '../../aces/Img/unsplash_gzfIO69Q6eM.png'
import unsplash_pTrhfmj2jDA from '../../aces/Img/unsplash_pTrhfmj2jDA-1.png'

function OurServices (){
    return(
        <div>
             <img className={clsx(style.Bubble)} src={Bubble} alt="" />
             <div className={clsx(style.OurServices)}>
                <h5>Our Services</h5>
                <h1>We focus on your beauty</h1>
                <p>Lorem ipsum dolor sit amet</p>
             </div>
             <div className={clsx(style.OurServicesconten)}>
                <div>
                
                    <img className={clsx(style.OurServicescontensmoll)} src={imgOurServices1} alt="" />
                    <img className={clsx(style.OurServicescontenbig)} src={unsplash_ZOT2Mewzmh8} alt="" />
                    </div>
                <div>
                    <img className={clsx(style.OurServicescontenbig)} src={unsplash_gzfIO69Q6eM} alt="" />
                    <img className={clsx(style.OurServicescontensmoll)} src={unsplash_pTrhfmj2jDA} alt="" />
                    </div>   
                
             </div>
        </div>
    )
}

export default OurServices
