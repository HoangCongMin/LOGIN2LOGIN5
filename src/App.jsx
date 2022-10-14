import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar/Navbar";
import Login from "./Page/Login";
import Navbaritemtowhover from "./Navbaritemtowhover/Navbaritemtowhover";
// import NavBarone from "./NavBarone/NavBarone";
import { useState } from "react";
import Napbaritemtwo from "./Napbaritemtwo/Napbaritemtwo";

function App() {
  const loginsss = useSelector((state) => state.Login.token);
  

  const mb=[<Napbaritemtwo/>,<Navbar/>]
  

  function random(array) {
    return array[Math.floor(Math.random() * array.length)]
    
}

//   useEffect(() => {
//     console.log(loginsss);
//   }, [loginsss]);

  // const[height,setHeight]=useState(false)




//   useEffect(()=>{const handleNapbar=()=>{
//     if(window.scrollY>0){
//         setHeight(true)
        
//     }else{setHeight(false)}
// }
// window.addEventListener('scroll',handleNapbar)
//   return ()=>{window.removeEventListener('scroll',handleNapbar)}},[]) 

  return (
    <div>
      {" "}
      {!loginsss && <Login />} 
      {loginsss &&  random(mb) }    
      
      
      </div>
  );
}

export default App;
