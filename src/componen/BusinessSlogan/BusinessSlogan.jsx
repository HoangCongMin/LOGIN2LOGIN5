import style from'./BusinessSlogan.module.css'
import clsx from'clsx'
function BusinessSlogan(){
    return(
        <div className={clsx(style.BusinessSlogan)}>
            <div className={clsx(style.BusinessSloganname)}>
            <h5>Business Slogan</h5>
            <h1>Best responsibility and service <br /> for our customers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis</p>
            </div>
        </div>
    )
}

export default BusinessSlogan