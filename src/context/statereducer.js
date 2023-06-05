export const initialState={
    isLoggedIn:false,
    forms:[],
    fav:[],
    card:[],
    count:[]
}
export const stateReducer=(state,action)=>{
     console.log(state,action)

     switch(action.type){
        case "LOGIN":return{
            ...state,
            isLoggedIn:action.payload
        }
        case "ARRAY":return{
            ...state,
            forms:action.payload
        }
        case "FAV":return{
            ...state,
            fav:state.forms.filter((value)=>
            value.id === action.payload.id ? (value.isCrt =!action.payload.isCrt):false,
            )
        }
        case"CART":
        return{...state,
            cart:state.forms.filter((car)=>
            car.id===action.payload.id?(car.isCart= !action.payload.isCart):false
            ) }


        case"DETAILS":
          return{
            ...state,
           productDetails:action.payload

          }


        case"REMOVE":
            return{
            ...state,
            count:state.forms.filter(e => e.id !== action.payload.id)
            }
        default:
            return state
     }
   
}