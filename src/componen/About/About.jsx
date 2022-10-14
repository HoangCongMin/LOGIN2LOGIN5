import style from'./About.module.css'
import clsx from'clsx'
import unsplash_DE6rYp1nAho from '../../aces/Img/Ảnh chụp Màn hình 2022-09-22 lúc 15.30.20.png'
import Play from '../../aces/Img/Play_button.png'
import backgroundimgposi from'../../aces/Img/Bubble BG-2.png'




function About (){
    return(
        <div className={clsx(style.About)}>
            <div> <img className={clsx(style.backgroundimgposi)} src={backgroundimgposi} alt="" /> </div>

            <h5>About</h5>
            <h1>We are a leading beauty clinic that has <br /> been around since 2002</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis</p>
            {/* <img src={unsplash_DE6rYp1nAho} alt="" /> */}
            <div className={clsx(style.Aboutbackgrund)}>
                <img className={clsx(style.Aboutimg)} src={Play} alt="" />

            </div>
        </div>
    )
}

export default About