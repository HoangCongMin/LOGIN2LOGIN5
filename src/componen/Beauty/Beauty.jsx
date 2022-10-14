import style from'./Beauty.module.css'
import clsx from'clsx'
import unsplash_3ewkNkfJj2k from '../../aces/Img/unsplash_3ewkNkfJj2k-1.png'
import unsplash_0_McYfdyEDA from'../../aces/Img/unsplash_0_McYfdyEDA.png'
import unsplash_7tDGb3HrITg from'../../aces/Img/unsplash_7tDGb3HrITg.png'
import Vector from'../../aces/Img/Vector.png'
import {FaCaretRight } from 'react-icons/fa'
import {FaSearch } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'


import unsplash_xayCTz6N2nM from'../../aces/Img/unsplash_xayCTz6N2nM.png'
import unsplash_DiJKOYIiNmQ from '../../aces/Img/unsplash_DiJKOYIiNmQ.png'
import unsplash_yfmjALh1S6s from'../../aces/Img/unsplash_yfmjALh1S6s.png'
import Twitter from'../../aces/Img/Twitter.png'
import Facebook from'../../aces/Img/Facebook.png'
import Instagram from'../../aces/Img/Instagram.png'
import Linkedin from '../../aces/Img/Linkedin.png'

function Beauty (){
    return(
        <div>
            <div className={clsx(style.Beauty)}>
                <div className={clsx(style.Beautyone)}>
                    <div className={clsx(style.Beautyonenumberone)}>
                        <img className={clsx(style.Beautyimg)} src={unsplash_3ewkNkfJj2k} alt="" />
                        <div className={clsx(style.Beautyonenumber)}>
                            <div className={clsx(style.BeautyConsultation)}>
                                <img src={Vector} alt="" />
                                 <h5>Consultation</h5>
                             </div>
                             <h1>How much does a consultation cost at our clinic?</h1>
                             <p>A wonderful serenity has taken possession of my entire soul, <br /> like these sweet mornings of spring which I enjoy with my <br /> whole heart. I am alone, and feel the charm of existence in <br /> this spot, which was created for the…</p>
                             <button className={clsx(style.BeautyRead)}>Read More <FaCaretRight/></button>
                        </div>
                    </div>




                    <div className={clsx(style.Beautyonenumberone)}>
                        <img className={clsx(style.Beautyimg)} src={unsplash_7tDGb3HrITg} alt="" />
                        <div className={clsx(style.Beautyonenumber)}>
                            <div className={clsx(style.BeautyConsultation)}>
                                <img src={Vector} alt="" />
                                 <h5>Beauty</h5>
                             </div>
                             <h1>Watch out! don't choose the wrong beauty product</h1>
                             <p>A wonderful serenity has taken possession of my entire soul, <br /> like these sweet mornings of spring which I enjoy with my <br /> whole heart. I am alone, and feel the charm of existence in <br /> this spot, which was created for the…</p>
                             <button className={clsx(style.BeautyRead)}>Read More <FaCaretRight/></button>
                        </div>
                    </div>



                    <div className={clsx(style.Beautyonenumberone)}>
                        <img className={clsx(style.Beautyimg)} src={unsplash_0_McYfdyEDA} alt="" />
                        <div className={clsx(style.Beautyonenumber)}>
                            <div className={clsx(style.BeautyConsultation)}>
                                <img src={Vector} alt="" />
                                 <h5>Treatments</h5>
                             </div>
                             <h1>About skin care you need to know</h1>
                             <p>A wonderful serenity has taken possession of my entire soul, <br /> like these sweet mornings of spring which I enjoy with my <br /> whole heart. I am alone, and feel the charm of existence in <br /> this spot, which was created for the…</p>
                             <button className={clsx(style.BeautyRead)}>Read More <FaCaretRight/></button>
                        </div>
                    </div>
                    
                    
                </div>
                <div className={clsx(style.Beautytow)}>
                    <div className={clsx(style.Beautytowinput)}>
                      <input placeholder='Search here ...' className={clsx(style.Beautyinput)} type="text" />
                       <div className={clsx(style.FaSearch)}>
                          <FaSearch/>
                        </div>
                    </div>

                    <div className={clsx(style.RecentPosts)}>
                        <div className={clsx(style.RecentPostsone)}>

                          <h5>Recent Posts</h5>

                          <div className={clsx(style.Recentstyle)}>
                            <img className={clsx(style.Recentstyleimg)} src={unsplash_xayCTz6N2nM} alt="" />
                            <div className={clsx(style.Recenttile)}>
                                <h6>01 jan 2021</h6>
                                <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.</p>
                            </div>
                          </div>
                          <div className={clsx(style.Recentstyle)}>
                            <img className={clsx(style.Recentstyleimg)} src={unsplash_DiJKOYIiNmQ} alt="" />
                            <div className={clsx(style.Recenttile)}>
                                <h6>01 jan 2021</h6>
                                <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.</p>
                            </div>
                          </div>
                          <div className={clsx(style.Recentstyle)}>
                            <img className={clsx(style.Recentstyleimg)} src={unsplash_yfmjALh1S6s} alt="" />
                            <div className={clsx(style.Recenttile)}>
                                <h6>01 jan 2021</h6>
                                <p>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.</p>
                            </div>
                          </div>


                        </div>
                    </div>

                    <div className={clsx(style.Categoriesall)}>
                        <div className={clsx(style.Categories)}>
                           <h5>Categories</h5>
                           <p>Consultation</p>
                           <p>Beauty</p>
                           <p>Treatments</p>
                           <p>News</p>
                        </div>
                    </div>

        
                    <div className={clsx(style.CloudTags)}>
                        <div className={clsx(style.CloudTagsone)}>
                        <h5>Cloud Tags</h5>
                        <div className={clsx(style.CloudTagsall)}>
                            <p>beauty</p>
                            <p>cute</p>
                            <p>skin</p>
                          </div>
                          <div className={clsx(style.CloudTagsall)}>
                            <p>glow</p>
                            <p>style</p>
                            <p>clinic</p>
                            </div> 
                            <div className={clsx(style.CloudTagsall)}>
                            <p>clinic</p>
                            <p>clinic</p>
                            <p>clinic</p>
                        </div>
                    </div>
                    </div>


                    <div className={clsx(style.SocialConnect)}>
                       <div className={clsx(style.Connect)}>
                        <h5>Social Connect</h5>
                       </div>
                       <div className={clsx(style.Connectlogo)}>
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                        <img className={clsx(style.Linkedin)} src={Linkedin} alt="" />
                       </div>


                    </div>
                </div>
                
            </div>
            <div className={clsx(style.slice)}>
                <div className={clsx(style.sliceall)}>
                  <p className={clsx(style.sliceone)}>1</p>
                  <p className={clsx(style.slicetow)}>2</p>
                  <p className={clsx(style.slicetow)}>3</p>
                  </div>
            </div>
            
            

        </div>
    )
}


export default Beauty