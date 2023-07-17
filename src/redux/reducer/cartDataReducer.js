import { act } from "react-dom/test-utils"
import {

    FETCH_CART_DATA_REQUEST,
    FETCH_CART_DATA_SUCCESS,
    FETCH_CART_DATA_FALIURE,

    ADD_CART_DATA_REQUEST,
    ADD_CART_DATA_SUCCESS,
    ADD_CART_DATA_FALIURE,

    UPDATE_CART_DATA_REQUEST,
    UPDATE_CART_DATA_SUCCESS,
    UPDATE_CART_DATA_FALIURE,

    DELETE_CART_DATA_REQUEST,
    DELETE_CART_DATA_SUCCESS,
    DELETE_CART_DATA_FALIURE,

}  from "../../redux/type"


const initialState = {
    cartDataList : [],
    isLoading : false,
    message : "",
}

const cartDataReducer = (state = initialState,action) =>{
   switch(action.type){
    case  FETCH_CART_DATA_REQUEST :
        return{
            ...state,
            isLoading : true
        }

        case  FETCH_CART_DATA_SUCCESS :
        return{
            ...state,
            isLoading : false,
            cartDataList :  action.payload
        }

        case  FETCH_CART_DATA_FALIURE:
            return{
                ...state,
                isLoading : false,
                message :  action.payload
            }

            case  ADD_CART_DATA_REQUEST :
                return{
                    ...state,
                    isLoading : true
                }
        
                case  ADD_CART_DATA_SUCCESS :
                return{
                    ...state,
                    isLoading : false,
                    cartDataList :  action.payload
                }
        
                case  ADD_CART_DATA_FALIURE:
                    return{
                        ...state,
                        isLoading : false,
                        message :  action.payload
                    }

                    case  UPDATE_CART_DATA_REQUEST :
                        return{
                            ...state,
                            isLoading : true
                        }
                
                        case UPDATE_CART_DATA_SUCCESS :
                        return{
                            ...state,
                            isLoading : false,
                            cartDataList :  action.payload
                        }
                
                        case  UPDATE_CART_DATA_FALIURE:
                            return{
                                ...state,
                                isLoading : false,
                                message :  action.payload
                            }
                            case  DELETE_CART_DATA_REQUEST :
                                return{
                                    ...state,
                                    isLoading : true
                                }
                        
                                case DELETE_CART_DATA_SUCCESS :
                                return{
                                    ...state,
                                    isLoading : false,
                                    cartDataList :  action.payload
                                }
                        
                                case  DELETE_CART_DATA_FALIURE:
                                    return{
                                        ...state,
                                        isLoading : false,
                                        message :  action.payload
                                    }

            default :
            return state

   }
}

export default cartDataReducer;