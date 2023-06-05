import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { TextField } from '@mui/material';
import { stateContext } from '../context/statecontext';

localStorage.setItem('edit',JSON.stringify([]));
let tasks = [];
const Product = () => {
    const {state,dispatch} = useContext(stateContext)
    console.log(state)
    tasks=state.forms;
    const [inpName,setName]=useState(state.edit?state.edit[0] ?.Name:'')
    const [inpDes,setDes]=useState(state.edit?state.edit[0]?.Description:'')
    const [inpPri,setPri]=useState(state.edit?state.edit[0] ?.Price:'')
    const [inpStock,setStock]=useState(state.edit?state.edit[0]?.Stock:'')
    const [isCompleted,setIsCompleted]=useState('false')
    const [formSub,setFormsub]=useState(false)
    
  let navigator = useNavigate()
    const inputName=(e)=>{
         console.log("e",e.target.value)
         setName(e.target.value)
    }
    const inputDes=(e)=>{
        console.log("e",e.target.value)
        setDes(e.target.value)
   }
   const inputPri=(e)=>{
    console.log("e",e.target.value)
    setPri(e.target.value)
    }
    const inputStock=(e)=>{
        console.log("e",e.target.value)
        setStock(e.target.value)
    }
    
     
    const createId=()=>{
      return Math.floor(Math.random()*100000);
    }

    const sub=(e)=>{
        e.preventDefault();
        setFormsub('true')
        console.log(inpName,inpDes)
          const setof={Name:inpName, Description:inpDes,Price:inpPri,Stock:inpStock, isCart : false,id:createId(),isCrt:false}
            if(state.edit?.length>0){
           tasks[state.edit[1]]=setof;
           dispatch({
            type:"EDIT",
            payload:[],
           }
            )
          }
         else{ 
           tasks.push(setof)
         }
        navigator("/homepage")
    }
  return (
    <div className='pro-cont'>

        <form onSubmit={sub}>
        <h2 className='login-head'>PRODUCT DETAILS....</h2>
            <TextField className="input" id="outlined-basic" label="Name" name='name' value={inpName} onChange={inputName} variant="outlined" />
            {inpName==="" && formSub && <div className='errorMsg'>The Name Is Required</div>}
            <TextField className="input" id="outlined-basic" label="Desription" name='des' value={inpDes} onChange={inputDes} variant="outlined" />   
            {inpDes==="" && formSub &&<div className='errorMsg'>The Des Is Required</div>}
            <TextField className="input" type="number" id="outlined-basic" label="Price" name='price' value={inpPri} onChange={inputPri} variant="outlined" />   
            {inpPri==="" && formSub &&<div className='errorMsg'>The Price Is Required</div>}
            <TextField className="input" type="number" id="outlined-basic" label="Stock" name='stock' value={inpStock} onChange={inputStock} variant="outlined" />   
            {inpStock==="" && formSub &&<div className='errorMsg'>The Stock Is Required</div>}  
             <input className="input link" type={"submit"} onClick={()=>dispatch({type:"ARRAY",payload:tasks})}></input> 
        </form>
        <Link className="link" to={"/homepage"}>Go To Home</Link>
    </div>
  )
}

export default Product