import * as React from 'react';
import { useContext,useState } from 'react';
import { stateContext } from '../context/statecontext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
//import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
//import Favorite from '@mui/icons-material/Favorite';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TextField } from '@mui/material';
import '../card.css'

const Cart = () => {
    // const[state,setState]=useState(1);
    const {state:{count, card, forms},dispatch}=useContext(stateContext);
    console.log(forms);

    const extraFun=()=>{
        let m = {}
        for(let i = 0;i < forms.length; i++){
            m[forms[i].id] = 1
        }
        return m;
    }

    const [func,setFunc] = useState(extraFun());
    console.log(func);

    const favor=(e)=>{
        dispatch({type:"FAV",payload:{
        id:e.id,
        isCrt:e.iscrt
        }
    })
      }

      const getCart=(e)=>{
        dispatch({type:"CART",payload:{
        id:e.id,
        isCart:e.isCart
        }
    })
      }

    const removeQuantity=(id)=>{
        if(func[id] > 0){
            setFunc(prevCount =>({...prevCount,[id] : prevCount[id]- 1}))
        }
    }

    const addQuantity=(id,stock)=>{
        if(func[id] < stock){
            setFunc(prevCount => ({...prevCount,[id] : prevCount[id] + 1})) 
        }
    }

    return (
                        <div className='full container'>
                        <div className='nav'>
                          <div className='nav-link'>
                          </div>  
                        </div>
                              <div className='row'>
                              {forms.filter(e => e.isCart === true)?.map((value,index)=>{
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
                            <Checkbox checked={value.isCart} onClick={()=>getCart(value)} icon={ <ShoppingCartIcon />} checkedIcon={<ShoppingCartIcon />} />
                            </IconButton>
                            <IconButton onClick={()=>removeQuantity(value.id)}>
                            <RemoveCircleIcon />
                            </IconButton> 
                          
                            <TextField id="outlined-basic"  variant="outlined" value={func[value.id]}/>
                            <IconButton onClick={()=>addQuantity(value.id,value.Stock)}>
                            <AddCircleIcon />
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

export default Cart

