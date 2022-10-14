import clsx from'clsx'
import style from'./MainSlider.module.css'
import Frame from'../../aces/Img/Frame 1.png'
import backfroundtop from'../../aces/Img/Slide Background.png'

function MainSlider(){
    return(
        <div className={clsx(style.Clinic)}>
            <img className={clsx(style.backfroundtop)} src={backfroundtop} alt="" />
        <div className={clsx(style.MainSlider)}>
            <div className={clsx(style.MainSliderone)} ><h1>Clinic & beauty consultant</h1>
            <p>It is a long established fact that a reader will be by the readable content of a page.</p>
            <button className={clsx(style.MoreDetails)}>More Details</button></div>
            <div className={clsx(style.MainSliderFrame)}><img className={clsx(style.Frame)} src={Frame} alt="" /></div>


        </div>
        <ul className={clsx(style.icon)}>
            <li className={clsx(style.iconone)}></li>
            <li className={clsx(style.icontow)}></li>
            <li className={clsx(style.iconone)}></li>
        </ul>
    </div>
    )
}

export default MainSlider