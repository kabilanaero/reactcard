import React, {useContext, useState} from 'react'
import { stateContext } from '../context/statecontext';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css'

        let object=[
            {
                name:"kabilan",
                password:"0109"
          
              },
              {
               name:"none",
               password:"0109"    
              }
        ]

    const Login = () => {
         
        const {state,dispatch} = useContext(stateContext);

            const [isName, setIsName] = useState('');
            const [isPass, setIsPass] = useState('');
            const [formSubmit, setFormSubmit] = useState(false);
            const navigate=useNavigate()
            
            const userName=(e)=>{
                console.log("e", e.target.value)
                setIsName(e.target.value)
            }

            const userPass=(e)=>{
                console.log("e",e.target.value)
                setIsPass(e.target.value)
            }

            const handleSubmit=(e)=>{
                e.preventDefault();
                setFormSubmit(true)
                let arr=object.find((e)=>{
                if((e.name===isName)&&(e.password===isPass)){
                    navigate('/Homepage')
                }
                })
            }
  return (
        <div className='containers'>
             <form className="log-form" onSubmit={handleSubmit}>
                 <h2 className='log'>Login</h2>
            {/* <p>Doesn't have an account yet?<a href="#">Sign Up</a></p> */}
             <FormControl>
        
    <p><label>Name:</label></p>
     <span><TextField id="outlined-basic" label="Name" classname="text1"variant="outlined" value={isName} type="text" onChange={userName} /></span>
        {isName === "" && formSubmit && <div className='one'>userName is required</div>}

    <p><label>Password:</label> </p> 
     <span><TextField id="outlined-password-input" label="Password"type="password" value={isPass} onChange={userPass}/></span>
        {isPass === "" && formSubmit && <div className='one'>userPass is required</div>}

    {/* <div className='btn'>
         <Button type='submit' className='but' variant="contained" color="primary">LOGIN </Button> 
    </div> */}
    <div>
        <button onClick={() => dispatch({type:"LOGIN",payload:true})}>LOGIN</button>
    
      </div>
    {/* <span className='for'>Forget<a href="#" className='ang'>  Username/Password?</a></span>
        <span className='fors'>Don't have an account?<a href="#" className='angs'>Sign Up</a></span> */}
    
     </FormControl>
        </form>
        </div>
     )
}

export default Login