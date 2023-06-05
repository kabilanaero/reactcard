import React, { useContext, useState } from 'react'
import { stateContext } from '../context/statecontext';
import './details.css'
 

 const Details = () => {
    const {state:{forms,fav},dispatch} = useContext(stateContext)
    console.log(forms);


  return (

    forms.map((value,index)=>{
        return  <div  key={index}>
   <div className='det-cont'>     
   <div className='det-row'>    
   <div className='det-col'>
    <img className='home-img'
          src={require('../bike.jpg')}
          width="100%"
          height="auto" 
          alt="logo" 
        />
        </div>
        <div className='det-col'>
         <h2>{value.Name}</h2>
         <h3>MT-Master of Torque</h3>
         <p>The Yamaha MT 15 V2 is a motorcycle that comes with a price tag ranging between Rs.1.68 Lakh to Rs.1.68 Lakh.It is available in 2 variants and 6 colours.MT 15 V2 is powered by a 155 cc bs6 engine. It has Disc front brakes and Disc rear brakes.MT 15 V2 weigths 141 kg and has a fuel tank capacity of 10 L.</p>   
         <p>{value.Desprition}</p>
          <p>${value.Price}</p>
          <p>STOCK:{value.Stock}</p>
          </div>
          </div>
          </div>
          </div>
 })

  )

}
export default Details 