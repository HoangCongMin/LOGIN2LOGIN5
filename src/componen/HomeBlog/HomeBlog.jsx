import clsx from'clsx'
import style from'./HomeBlog.module.css'



function HomeBlog(){
    return(
        <div>
        
        <div className={clsx(style.HomeBlogall)}>
            <div className={clsx(style.HomeBlogallone)} >
                <div className={clsx(style.HomeBlogallonemsmall)}>
                <div>
                    <h1>Blog</h1>
                    </div>
                <div>
                    <p>Home	• Blog</p>
                </div>
                </div>
            </div>

        </div>
        </div>
       
    )
}

export default HomeBlog