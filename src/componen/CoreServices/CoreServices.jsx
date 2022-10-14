import style from'./CoreServices.module.css'
import clsx from'clsx'
import Animation1 from'../../aces/Img/Animation1.png' 
import Animation2 from'../../aces/Img/Animation2.png'
import Animation3 from'../../aces/Img/Animation3.png'
import Play_button from'../../aces/Img/Play_button.png'
import Animation4 from'../../aces/Img/about.c151a2e1c3887bdedb13.png'
import background from'../../aces/Img/Bubble2.png'

function CoreServices(){
    return(
        <div>
        
        <div className={clsx(style.CoreServices)}>
            <p className={clsx(style.MainServices)}>Main Services</p>
            <h1 className={clsx(style.Learnservices)}>Learn services to focus <br /> on your beauty</h1>
            <p className={clsx(style.Porta)}>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient <br /> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
        </div>
        <div className={clsx(style.BoxSection)}>
            <div className={clsx(style.BoxBacground)}>
                <img src={Animation1} alt="" className={clsx(style.Ellipse)} />
                <p className={clsx(style.Beauty)}>Beauty consultation</p>
                <p className={clsx(style.Nonparturient)}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>
            <div className={clsx(style.BoxBacground)}>
                <img src={Animation2} alt="" className={clsx(style.Ellipse)}/>
                <p className={clsx(style.Beauty)}>Beauty consultation</p>
                <p className={clsx(style.Nonparturient)}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>
            <div className={clsx(style.BoxBacground)}>
                <img src={Animation3} alt="" className={clsx(style.Ellipse)}/>
                <p className={clsx(style.Beauty)}>Beauty consultation</p>
                <p className={clsx(style.Nonparturient)}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>
        
        </div>
        <div className={clsx(style.CoreServicesall)}>
            <img className={clsx(style.backgroundimg)} src={background} alt="" />
        <div className={clsx(style.AboutUs)}>
            <div className={clsx(style.AboutUsone)}>
                <p className={clsx(style.About)}>About Us</p>
                <h1 className={clsx(style.bestbeautyclinic)}>We are the best beauty clinic</h1>
                <p className={clsx(style.Loremipsum)}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero. Nunc, <br /> ipsum ornare mauris sit quam quis enim. Varius <br /> tellus in suspendisse placerat. <br /> <br /> Id dui erat sed quam tellus in purus. Pellentesque <br /> congue fringilla cras tellus enim. </p>
                <div className={clsx(style.MoreDetailsButton)}>
                    <button className={clsx(style.ButtonBG)}>Learn More</button>
                    <img src={Play_button} alt="" className={clsx(style.Play)}/>
                    <span className={clsx(style.WatchVideo)}>Watch Video</span>
                </div>
            </div>
            <div className={clsx(style.AboutUstow)}>
                <img className={clsx(style.Animation4)} src={Animation4} alt="" />
            </div>
            </div>
        </div>
        </div>
    )
}

export default CoreServices