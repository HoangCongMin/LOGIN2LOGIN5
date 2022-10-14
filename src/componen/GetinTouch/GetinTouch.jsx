import clsx from'clsx'
import style from'./GetinTouch.module.css'
import marker from '../../aces/Img/map-marker-alt.png'
import phone from '../../aces/Img/phone-alt.png'
import mail from '../../aces/Img/mail-bulk.png'

function GetinTouch(){
    return(
        <div>
            <div className={clsx(style.GetinTouch)}>
                <h5 className={clsx(style.GetinTouchtitle)}>Get in Touch</h5>
                <h1 className={clsx(style.Getintitle)}>Get direct handling by us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>
            <div className={clsx(style.Getin)}>
                <div className={clsx(style.GetinAddress)}>
                    <img src={marker} alt="" />
                    <h5>Address</h5>
                    <h3>101 Baker Street, NY</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br /> aliquam, purus sit</p>
                </div>
                <div className={clsx(style.GetinPhone)}>
                    <img src={phone} alt="" />
                    <h5>Phone</h5>
                    <h3>+896 120 5889</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br /> aliquam, purus sit</p>

                </div>
                <div className={clsx(style.GetinAddress)}>
                    <img src={mail} alt="" />
                    <h5>Mail</h5>
                    <h3>mail@company.com</h3>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut <br /> aliquam, purus sit</p>

                </div>
            </div>

        </div>
    )
}

export default GetinTouch