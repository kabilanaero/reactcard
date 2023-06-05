import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { stateContext } from '../context/statecontext';
import Card from '@mui/material/Card';
import { CardActions, CardContent, Checkbox, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './home.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


let favorites = [];


const Homepage = () => {
   const {state:{forms},dispatch} = useContext(stateContext)


    
    
   
    
    
    const favor = (e) => {
        dispatch({
          type:"FAV",
          payload:{
            id:e.id,
            isCrt:e.isCrt
          }
        })
    }

    const getCard = (e) => {
      dispatch({
        type:"CART",
        payload:{
          id:e.id,
          isCrt:e.isCart
        }
      })
  }
    
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };

   
  const Navigate = useNavigate();
  const handleFav = () => {
    Navigate('/Favt')
  };
  
  const handleCard = () => {
    Navigate('/Card')
  };
  

   const move = (value) => {
    Navigate("/details");
    dispatch({
      type:"DETAILS",
      payload:[value]
    })
   }
  
   const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
     
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  


  return (
    <div className='home-container'>
      <div className='nav'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='btn'
      >
       menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleFav}>Favorite</MenuItem>
        <MenuItem onClick={handleCard}>cart</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      
        <Link  to={"/Product"}>ADD PRODUCTDETAILS
        <Fab size="small" color="primary" aria-label="add" >
        <AddIcon  />
        </Fab>
        </Link>
    
        
        
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </div>
      <div className='home-cont'>     
     <div className='row'>
            {forms.map((value,index)=>{
              return  <div className='col' key={index}>
              <Card sx={{ maxWidth: 400 }}>
                <div onClick={() => move(value)}>
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
            <p>The Yamaha MT 15 V2 is a motorcycle that comes with a price tag ranging between Rs.1.68 Lakh to Rs.1.68 Lakh.It is available in 2 variants and 6 colours.MT 15 V2 is powered by a 155 cc bs6 engine..</p>
          </Typography>
          <Typography>
          <p>{value.Desprition}</p>
       <div className='card'>  
       <div className='price'> 
          <p>${value.Price}</p>
          </div>
          <div className='stock'>
          <p>STOCK:{value.Stock}</p>
          </div>
          </div> 
         
        </Typography>
      </CardContent>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox   onChange={()=>favor(value)}  checked={value.isCrt} color="error" icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon style={{color:"red"}}/>} id="checkbox"/>
        </IconButton>
        <IconButton aria-label="share">
        <Checkbox   onChange={()=>getCard(value)}  checked={value.isCart} color="error" icon={<ShoppingCartIcon />} checkedIcon={<ShoppingCartIcon />}/>
        
        </IconButton>
      </CardActions>
    </Card>
            </div>
            })
            }
            </div>
            </div>
        </div>
  )
}

export default Homepage