import Background from'../../aces/Img/Background Slider.png'
import clsx from'clsx'
import style from'./Homenew.module.css'
import Group4 from'../../aces/Img/Group4.png'


function Homenew(){
    return(
      
        <div className={clsx(style.homenewone)}>
          <div className={clsx(style.homenewonetitle)}>
              <div className={clsx(style.home)}>
                <h1>Your beauty center place</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Commodo, massa pellentesque arcu fusce et <br /> magna consequat neque vitae lobortis.</p>
                <button className={clsx(style.Details)}>More Details</button>
              </div>
              <div className={clsx(style.Video)}>
                <img src={Group4} alt="" />
                <p>Tour Video</p>
              </div>
              </div>
        </div>
    )
}

export default Homenew