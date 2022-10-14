import style from'./OurGallery.module.css'
import clsx from'clsx'
import unsplash_3ewkNkfJj2k from'../../aces/Img/unsplash_3ewkNkfJj2k.png'
import unsplash_FVh_yqLR9eA from'../../aces/Img/unsplash_FVh_yqLR9eA-1.png'
import unsplash_xayCTz6N2nM from'../../aces/Img/unsplash_xayCTz6N2nM.png'
import unsplash_Pe9IXUuC6QU from'../../aces/Img/unsplash_Pe9IXUuC6QU-1.png'
import unsplash_fvInY from'../../aces/Img/unsplash_fvInY-Gh7sc.png'
import unsplash_HEde from'../../aces/Img/unsplash_HEde-a_T4E8.png'
import unsplash_9Wa1HgE1XlA from'../../aces/Img/unsplash_9Wa1HgE1XlA.png'
import unsplash_PqyzuzFiQfY from'../../aces/Img/unsplash_PqyzuzFiQfY.png'
import unsplash_4SUyx4KQ5Ik from '../../aces/Img/unsplash_4SUyx4KQ5Ik.png'
import Polygon from'../../aces/Img/Polygon 1-1.png'
import Group4 from'../../aces/Img/Group4.png'




function OurGallery(){
    return(<>
        <div className={clsx(style.OurGallery)} >
            <div>
            <h5>Our Gallery</h5>
            <h1>Check out the collection pictures <br /> from our clinic</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur <br />  adipiscing elit ut aliquam, purus sit amet <br /> luctus venenatis</p>
        </div>
        <div className={clsx(style.OurGalleryimg)}>
            <img src={unsplash_3ewkNkfJj2k} alt="" />
            <img src={unsplash_FVh_yqLR9eA} alt="" />
            <img src={unsplash_xayCTz6N2nM} alt="" />
            <img src={unsplash_Pe9IXUuC6QU} alt="" />
            <img src={unsplash_fvInY} alt="" />
            <img src={unsplash_HEde} alt="" />
            <img src={unsplash_9Wa1HgE1XlA} alt="" />
            <img src={unsplash_PqyzuzFiQfY} alt="" />
            <img src={unsplash_4SUyx4KQ5Ik} alt="" />
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor <br /> rhoncus dolor purus non enim, <span> our teams</span>.</p> */}
        </div>
        <p className={clsx(style.OurGalleryimgp)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor <br /> rhoncus dolor purus non enim, <span> our teams</span>.</p>


        <div className={clsx(style.BackgroundMask)}>
            <div className={clsx(style.BackgroundMaskone)}>
            <h1>Watch the video tour</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br /> aliquam,  purus sit amet luctus venenatis</p>
            <img src={Group4} alt="" />
            </div>
        </div>
        </>
    )
}

export default OurGallery