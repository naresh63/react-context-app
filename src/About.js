 import React, { useContext } from 'react';
 import { UserNameContext } from './App';
 const About=()=>{
   const global= useContext(UserNameContext)
    console.log(global)
    let [dark,light,green]=global;
    console.log(light)
    console.log(dark)

   return(
     <div>
       <h1>About page</h1>
       <div className='theme' style={{background:dark.foreground,color:dark.background}}> <p>theme 1</p></div>
       <div className='theme' style={{background:light.foreground,color:light.background}}> <p>theme 2 </p></div>
       <div className='theme'style={{background:green.foreground,color:green.background}}> <p>theme 3</p></div>
     </div>
   )
 }
 export default About;