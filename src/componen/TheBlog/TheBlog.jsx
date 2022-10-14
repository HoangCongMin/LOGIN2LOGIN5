import clsx from'clsx'
import style from'./TheBlog.module.css'
import {FaAngleDoubleRight } from 'react-icons/fa'
import unsplash_3ewkNkfJj2k from '../../aces/Img/unsplash_3ewkNkfJj2k-1.png'
import unsplash_7tDGb3HrITg from'../../aces/Img/unsplash_7tDGb3HrITg.png'
import unsplash_0_McYfdyEDA from'../../aces/Img/unsplash_0_McYfdyEDA.png'


function TheBlog(){
    return(
        <div>
            <div className={clsx(style.Blog)}>
                <h5>The Blog</h5>
                <h1>Our latest news</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>


            <div className={clsx(style.Blogitemall)}>
                <div className={clsx(style.Blogitem)}>
                    <img src={unsplash_3ewkNkfJj2k} alt="" />
                    <div className={clsx(style.Blogitemconten)}>
                        <h1>How much does a consultation cost at our clinic?</h1>
                        <p>A wonderful serenity has taken <br /> possession of my entire soul, <br /> like these sweet mornings ...</p>
                        <div className={clsx(style.Learn)}>
                            <h6>Learn more</h6>
                            <span><FaAngleDoubleRight/></span>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.Blogitem)}>
                    <img src={unsplash_7tDGb3HrITg} alt="" />
                    <div className={clsx(style.Blogitemconten)}>
                        <h1>Watch out! don't choose the wrong beauty product</h1>
                        <p>A wonderful serenity has taken <br /> possession of my entire soul, <br /> like these sweet mornings ...</p>
                        <div className={clsx(style.Learn)}>
                            <h6>Learn more</h6>
                            <span><FaAngleDoubleRight/></span>
                        </div>
                    </div>
                </div>
                <div className={clsx(style.Blogitem)}>
                    <img src={unsplash_0_McYfdyEDA} alt="" />
                    <div className={clsx(style.Blogitemconten)}>
                        <h1>About skin care you need to know</h1>
                        <p>A wonderful serenity has taken <br /> possession of my entire soul, <br /> like these sweet mornings ...</p>
                        <div className={clsx(style.Learn)}>
                            <h6>Learn more</h6>
                            <span><FaAngleDoubleRight/></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TheBlog