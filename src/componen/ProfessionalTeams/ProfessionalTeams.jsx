import style from'./ProfessionalTeams.module.css'
import clsx from'clsx'
import Facebook from'../../aces/Img/Facebook.png'
import Twitter from'../../aces/Img/Twitter.png'
import Instagram from '../../aces/Img/Instagram.png'

import unsplash_pTrhfmj2jDA from'../../aces/Img/unsplash_pTrhfmj2jDA.png'
import unsplash_mEZ3PoFGs_k from'../../aces/Img/unsplash_mEZ3PoFGs_k.png'
import unsplash_FVh_yqLR9eA from'../../aces/Img/unsplash_FVh_yqLR9eA.png'
import backgroundimgposi from'../../aces/Img/Bubble BG-2.png'


function ProfessionalTeams (){
    return(
        
        <div className={clsx(style.ProfessionalTeams)}>
            {/* <div> <img className={clsx(style.backgroundimgposi)} src={backgroundimgposi} alt="" /> </div> */}
            <p className={clsx(style.Professional)}>Professional Teams</p>
            <h1 className={clsx(style.TheProfessionalexpert)}>The Professional expert</h1>
            <h6 className={clsx(style.Loremipsumdolor)}>Loremipsumdolor sit amet, consectetur adipiscing elit ut aliquam.</h6>
            <div className={clsx(style.Section)}>
            <div className={clsx(style.BoxSection)}>
                <img src={unsplash_pTrhfmj2jDA} className={clsx(style.unsplash)} alt="" />
                <h6>Surgeon</h6>
                <h5>Lilly Adams</h5>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br /> aliquam, purus sit</p>
                <div className={clsx(style.icon)}><img  src={Twitter} alt="" /> <img src={Facebook} alt="" /><img src={Instagram} alt="" /></div>

            </div>
            <div  className={clsx(style.BoxSectionMid)}>
            <img src={unsplash_FVh_yqLR9eA}  className={clsx(style.unsplash)} alt="" />
                <h6>Dermatologist</h6>
                <h5>Bella sebastian</h5>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br /> aliquam, purus sit</p>
                <div className={clsx(style.icon)}><img src={Twitter} alt="" /> <img src={Facebook} alt="" /><img src={Instagram} alt="" /></div>

                
            </div>
            <div className={clsx(style.BoxSection)}>
            <img src={unsplash_mEZ3PoFGs_k} className={clsx(style.unsplash)} alt="" />
                <h6>Stylist expert</h6>
                <h5>Lilly Adams</h5>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br /> aliquam, purus sit</p>
                <div className={clsx(style.icon)}><img src={Twitter} alt="" /> <img src={Facebook} alt="" /><img src={Instagram} alt="" /></div>

                
            </div>
            </div>
        </div>
    )
}

export default ProfessionalTeams