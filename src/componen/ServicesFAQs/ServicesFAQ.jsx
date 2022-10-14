import clsx from'clsx'
import style from'./ServicesFAQ.module.css'
import Group4 from'../../aces/Img/Group4.png'
import {FaAngleDown,FaAngleUp } from 'react-icons/fa'
import { useState } from 'react'


const data =[
  {
    name:'Is beauty consultation handled thoroughly?',
    conten:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ',
    conten2:'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla'
},
{
  name:'Can I be beautiful in an instant time?',
  conten:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ',
  conten2:'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla'
},

{
  name:'Are there any side effects to the treatment methods or treatments at this clinic?',
  conten:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ',
    conten2:'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla'
},

{
  name:'Do professionals have accreditation in their respective fields?',
  conten:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ',
  conten2:'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla'
},

    ]



function ServicesFAQ (){
  const [selec,Setselec]=useState(null)

  const tonggle= (index) =>{
    if(selec === index){
      return Setselec(null)
    }
    Setselec(index)
  }
    return(
        <div>
          <div className={clsx(style.ServicesFAQ)}>
            <div className={clsx(style.Serviceitem)}>
             <div className={clsx(style.Serviceitemoneone)}>
                <h1>Best responsibility and service <br />for our customers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br /> aliquam, purus sit amet luctus venenatis</p>
             </div>
             <div className={clsx(style.Serviceitemone)}>
                <img src={Group4} alt="" />
                <h5>Treatments Videos</h5>
             </div>

            </div>
          </div>
          <div className={clsx(style.ServicesFAQone)}>
            <h1>Services FAQ’s</h1>
            <div className={clsx(style.ServicesFAQicon)}></div>
            <div className={clsx(style.Accordion)} >
              {data.map((item,index)=>(
                <div className={clsx(style.faqitem)} >
                  <div onClick={()=>tonggle(index)} className={clsx(style.faqname)}>
                    <h3>{item.name}</h3>{selec===index ? <FaAngleDown/>:<FaAngleUp/>  }
                  </div>
                  <div className={selec===index ? clsx(style.faqcontenshow) : clsx(style.faqconten)} >
                    <p>{item.conten}</p>
                    <p>{item.conten2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}

export default ServicesFAQ