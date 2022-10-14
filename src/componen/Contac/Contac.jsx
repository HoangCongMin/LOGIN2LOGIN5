import style from'./Contac.module.css'
import clsx from'clsx'
import Contact from'../../aces/Img/Contact Animations.png'
import Bubble2 from'../../aces/Img/Bubble2.png'
import map from'../../aces/Img/map.png'



function Contacnew(){
    return(
        <div>
            <div className={clsx(style.Contactnew)}>
            <h5 className={clsx(style.Contactnewtitle)}>Contact Us</h5>
            <div className={clsx(style.Contactnewconten)}>
                <h1>Contact service for our <br /> customers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet <br /> luctus venenatis</p>
            </div>
            </div>


            <div className={clsx(style.ContactUsitem)}>
                <img className={clsx(style.Bubble2)} src={Bubble2} alt="" />

                 <div className={clsx(style.ContactAnimations)}>
                   <img src={Contact} alt="" />
                  </div>

                <div className={clsx(style.ContactForm)}>
                    <form>
                         <div className={clsx(style.NameInput)}>
                              <input type="text" className={clsx(style.Rectangle1)}  placeholder="first name"/>
                               <input type="text" className={clsx(style.Rectangle1)} placeholder="last name"/>
                          </div> 
                          <br></br>
                           <input type="text" className={clsx(style.Rectangle2)} placeholder="email address"/> <br></br>
                           <input type="text" className={clsx(style.Rectangle2)} placeholder="subject message"/> <br></br>
                         <textarea className={clsx(style.Rectangle3)} placeholder="your in queri here"></textarea>

                    </form>
                    <button className={clsx(style.SendMessage)}>Send Message</button>
                </div> 


                     
            </div>
            <img className={clsx(style.map)} src={map} alt="" />      
        
            
    </div>
    )
} 

export default Contacnew