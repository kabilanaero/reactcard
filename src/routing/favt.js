import React, { useContext, useState } from 'react'
import { stateContext } from '../context/statecontext';
import Card from '@mui/material/Card';
import { CardActions, CardContent, Checkbox, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './favt.css'

const Favt = () => {
    const {state:{forms,fav},dispatch} = useContext(stateContext)
    console.log(forms);
   
    const favor = (e) => {
        dispatch({
          type:"FAV",
          payload:{
            id:e.id,
            isCrt:e.isCrt
          }
        })
    }
  return (
    <div className='full container'>
      <div className='nav'>
        <div className='nav-link'>
        </div>  
      </div>
            <div className='row'>
            {forms.filter(e => e.isCrt === true)?.map((value,index)=>{
              return  <div className='col' key={index}>
              <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <img className='home-img'
          src={require('../bike.jpg')}
          width="100%"
          height="auto" 
          alt="logo" 
        />
        </Typography>
        <Typography>
          <h2>{value.Name}</h2>
          </Typography>
          <Typography>
            <p>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</p>
          </Typography>
          <Typography>
          <p>{value.Desprition}</p>
          <div className='card'>  
       <div className='price'> 
          <p>${value.Price}</p>
          </div>
          <div className='stock'> 
          <p>{value.Stock}</p>
          </div>
          </div> 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox   onClick={()=>favor(value)}  checked={value.isCrt} color="error"  icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon style={{color:"red"}}/>} id="checkbox"/>
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
            </div>
            })
            }
            </div>
        </div>
  )
}

export default Favt