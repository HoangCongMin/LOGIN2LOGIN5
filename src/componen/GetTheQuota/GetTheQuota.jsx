import clsx from'clsx'
import style from'./GetTheQuota.module.css'



function GetTheQuota (){
    return(<div className={clsx(style.GetTheQuotaone)}><div className={clsx(style.GetTheQuota)}>
        <div>
        <h5>Get The Quota</h5>
        <h1>Want to be handled by our <br /> professional team immediately?</h1>
        <p>Id dui erat sed quam tellus in purus. Pellentesque congue <br /> fringilla cras tellus enim.</p>
        </div>
        <button>Make an Appointment</button>
    </div></div>)
}

export default GetTheQuota