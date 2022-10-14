import clsx from'clsx'
import style from'./SiteFooter.module.css'
import Footer from '../../aces/Img/Footer Logo.png'
import linkedin from '../../aces/Img/linkedin-in.png'
import instagram from'../../aces/Img/instagram (1).png'
import twitter from'../../aces/Img/twitter (1).png'
import facebook from'../../aces/Img/facebook-f.png'
import youtube from'../../aces/Img/youtube.png'

function SiteFooter(){
    return(
        < div className={clsx(style.SiteFooter)}>
            <div className={clsx(style.SiteFootersetup)}>
            <div className={clsx(style.SiteFooterone)}>
                <div className={clsx(style.Sidebar1)}>
                    <img src={Footer} alt="" />
                    <h6>Beautice is a Beauty Clinic WordPress Theme.</h6>
                    <h6 className={clsx(style.Sidebarnew)}>Baker Steet 101, NY, United States.</h6>
                    <span >+521 569 8966.</span>   <span className={clsx(style.Sidebarspan)} ><u>mail@company.com</u></span>
                </div>
                <div className={clsx(style.Sidebar)}>
                    <h6>Pages</h6>
                   <ul>
                      <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href=""> home</a></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href=""> About</a></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href=""> Services</a></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href=""> Gallery</a></li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href=""> Team</a> </li>
                </ul>
                </div>
                
                <div  className={clsx( style.Sidebaronenumber)}>
                    <h6>Informations</h6>
                <ul>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href="">Terms & conditions</a></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href=""> Privacy policy</a></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg> <a href=""> Blog</a></li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg><a href=""> Contact</a></li>
                </ul>
                </div>
                
                
                
            </div>
            <div className={clsx(style.SiteFooterend)}>
                <div>
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={youtube} alt="" />
                </div>
                <p>© AltDesain Studio 2021 - All right reserved.</p>
            </div>
            </div>
        </div>
    )
}

export default SiteFooter