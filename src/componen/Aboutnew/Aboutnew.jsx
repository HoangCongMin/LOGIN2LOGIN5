import style from'./Aboutnew.module.css'
import clsx from'clsx'
import Illustration from '../../aces/Img/Illustration-1.png'

function Aboutnew (){
    return(
        <div>
            <div className={clsx(style.Aboutnew)}>
                <div className={clsx(style.iAboutmg)}>
                    <img src={Illustration} alt="" />
                </div>
                <div className={clsx(style.AboutUs)}>
                   <h5>About Us</h5>
                   <h1>We are the best beauty clinic</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Elit, quam suscipit purus donec <br /> amet. Egestas volutpat facilisi eu libero. Nunc, <br /> ipsum ornare mauris sit quam quis enim. Varius <br /> tellus in suspendisse placerat.</p>
                   <button>Learn More</button>
                </div>
            </div>
                
        </div>
    )
}

export default Aboutnew