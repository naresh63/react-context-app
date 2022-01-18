import './App.css';
import React, { useState } from 'react'
import About from './About'
export const UserNameContext=React.createContext();
function App() {
  let[global,setGlobal]=useState( [
     {foreground:"#000000",background:"#eeeeee"},
     {foreground:"#ffffff",background:"#222222"},
     {foreground:"#27ae60",background:"#f39c12"}
  ])
  return (
    <UserNameContext.Provider value={global}>
    <div className="App">
    <h1>App component</h1>
       <About/>
    </div>
    </UserNameContext.Provider>
  );
}
export default App;
