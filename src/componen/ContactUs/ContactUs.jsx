import style from'./ContactUs.module.css'
import clsx from'clsx'
import Contact from'../../aces/Img/Contact Animations.png'

function ContactUs(){
    return(<div className={clsx(style.ContactUs)}>
        <div className={clsx(style.ContactUsitem)}>
        <div className={clsx(style.ContactAnimations)}>
            <img src={Contact} alt="" />
        </div>
        <div className={clsx(style.ContactForm)}>
            <h3>Contact Us</h3>
            <h4>Send your inquiry to <br /> our expert team</h4>
            <h6>Lorem ipsum dolor sit amet nulla turapis tellus.</h6>
            <form>
                <div className={clsx(style.NameInput)}>
                <input type="text" className={clsx(style.Rectangle1)}  placeholder="first name"/>
                <input type="text" className={clsx(style.Rectangle1)} placeholder="last name"/>
                </div> <br></br>
                <input type="text" className={clsx(style.Rectangle2)} placeholder="email address"/> <br></br>
                <input type="text" className={clsx(style.Rectangle2)} placeholder="subject message"/> <br></br>
                <textarea className={clsx(style.Rectangle3)} placeholder="your in queri here"></textarea>

            </form>
            <button className={clsx(style.SendMessage)}>Send Message</button>
        </div>
        </div>

    </div>)
}

export default ContactUs