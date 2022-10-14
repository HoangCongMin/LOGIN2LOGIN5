import { Route, Routes, NavLink, Link, useMatch, useResolvedPath } from 'react-router-dom'
import About from '../Page/About'
import Home from '../Page/Home'
import Blog from '../Page/Blog'
import MainServices from '../Page/MainServices'
import Services from '../Page/Services'
import style from '../Navbaritemtowhover/Navbaritemtowhover.module.css'
import clsx from 'clsx'
import MainLogotow from'../aces/Img/MainLogotow.png'
import Logoutt from '../Page/Logout'
import Contac from '../Page/Contac'
import Hometow from '../Page/Hometow'

import { useState } from 'react'
import { useEffect } from 'react'
import { color } from '@mui/system'
import { FaPlus } from 'react-icons/fa'
function Navbaritemtowhover() {
    const [icon, setIcon] = useState(false)
    // const[height,setHeight]=useState(false)


    // const navLinkClass = ({ isActive }) => {
    //     return isActive ? "nav-link activated" : "nav-link"}

    // useEffect(()=>{const handleResize=()=>{
    //     if(window.innerWidth<1271){
    //         setWidth(false)
    //     }else{setWidth(true)}}
    // window.addEventListener('resize',handleResize)
    //   return ()=>{window.removeEventListener('resize',handleResize)}},[])



    //   useEffect(()=>{const handleNapbar=()=>{
    //     if(window.scrollY>0){
    //         setHeight(true)

    //     }else{setHeight(false)}
    //     console.log(window.scrollY)   
    // }
    // window.addEventListener('scroll',handleNapbar)
    //   return ()=>{window.removeEventListener('scroll',handleNapbar)}},[]
    //   ) 

    return (
        <div >
            <div
                className={clsx(style.navbarone)}>
                <img src={MainLogotow} alt="" />
                <ul className={clsx(style.navitem)}>

                    <li>
                        <NavLink
                            style={({ isActive }) => { return { color: isActive ? '#ffff' : '' } }}
                            className={clsx(style.navlink)} to='/'>Home
                        </NavLink>
                    </li>

                    <li><NavLink
                        onClick={() => setIcon()}
                        style={({ isActive }) => { return { color: isActive ? '#ffff' : '' } }}
                        className={clsx(style.navlink)} to='/About'> About </NavLink></li>
                    <li>
                 <NavLink
                style={({isActive})=>{ return{ color: isActive?'#ffff':''}}}
                 className={clsx(style.navlink)} to='/Services'>Service</NavLink>

                 </li>

                    <li><NavLink
                        onClick={() => setIcon(!icon)}
                        style={({ isActive }) => { return { color: isActive ? '#ffff' : '' } }}
                        className={clsx(style.navlink)} to="/MainServices"> Gallery</NavLink></li>

                    <li><NavLink
                        onClick={() => setIcon(!icon)}
                        style={({ isActive }) => { return { color: isActive ? '#ffff' : '' } }}
                        className={clsx(style.navlink)} to="/Blog"> Blog</NavLink></li>


               <li><NavLink
                style={({isActive})=>{ return{ color: isActive?'#ffff':''}}}
                 className={clsx(style.navlink)} to="/Contac">Contact</NavLink></li>
                




                </ul>




                <button className={clsx(style.buttonlogout)}  >
                    <Logoutt></Logoutt>
                </button>
                <label for="nav_mobile_input" className={clsx(style.nav_bars_btn)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </label>
                <input type="checkbox" hidden className={clsx(style.nav_input)} id='nav_mobile_input' />
                <label for="nav_mobile_input" className={clsx(style.nav_overlay)}></label>

                <ul className={clsx(style.nav_mobile)}>
                    <label for="nav_mobile_input" className={clsx(style.nav_close)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>

                    </label>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/MainServices'>MainServices</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><a>Gallery</a></li>
                    <li><a href="">Blog</a></li>


                </ul>
            </div>


            <Routes>
                <Route path="/" element={<Hometow />}></Route>
                <Route path="/MainServices" element={<MainServices />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Services" element={<Services />}></Route>
                <Route path="/Blog" element={<Blog/>}></Route>
                <Route path="/Contac" element={<Contac/>}></Route>


            </Routes>




        </div>

    )
}

export default Navbaritemtowhover