import { useState } from 'react'
import './App.css'

function APP() {

  const [colour, setBgColor] = useState('grey');

  return (
    <>
    <div className='Bt-container d-flex align-items-center justify-content-center border border-curved' style={{backgroundColor:colour, height:'800px'}}>
      <h2 style={{ color:'black',marginTop:'-400px',marginLeft:'100px'}}>Click The Buttons & Change the Background colour</h2>
      <div  className='border border-2 rounded' style={{backgroundColor:'violet',width:'500px',height:'250px',marginLeft:'-650px'}}>
        <button className='border border-2 rounded bg-danger' onClick={()=>setBgColor('Red')}  style={{marginRight:'20px',marginLeft:'50px',marginTop:'100px', height:'50px',fontSize:'20px'}}>Button 1</button>
        <button className='border border-2 rounded bg-primary' onClick={()=>setBgColor('Blue')} style={{marginRight:'20px',height:'50px',fontSize:'20px'}}>Button 2</button>
        <button className='border border-2 rounded bg-success' onClick={()=>setBgColor('Green')} style={{marginRight:'20px',height:'50px',fontSize:'20px'}}>Button 3</button>
        <button className='border border-2 rounded bg-warning' onClick={()=>setBgColor('Orange')} style={{marginRight:'20px',height:'50px',fontSize:'20px'}}>Button 4</button>
      </div>
   </div>
    </>
  )

}

export default APP
