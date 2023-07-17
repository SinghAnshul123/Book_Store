 //This page contain the Action's for Cart data for the Redux state function calling

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


    EMPTY_CART_DATA_REQUEST,
    EMPTY_CART_DATA_SUCCESS,
    EMPTY_CART_DATA_FALIURE,

}  from "../../redux/type"

import { commerce } from "../../lib/commerce"


//************ FETCH CART DATA ********//

export const fetchCart = () =>{
    return async(dispatch) =>{
      dispatch(fetchCartListRequest());
      try{     
        const response = await  commerce.cart.retrieve();
        // console.log("responsibel====>",response)
        if(response){
           dispatch(fetchCartListSuccess(response))
        }
        else{
            dispatch(fetchCartListFaliure(response.message))
        }
      }
      catch(err){
        // dispatch(fetchBookListFaliure(response.message))
        throw new Error(err)
      }
        
    }
}





const fetchCartListRequest=() =>{
    return {
        type :  FETCH_CART_DATA_REQUEST,
    };
};

const fetchCartListSuccess = (data) =>{
    return {
        type : FETCH_CART_DATA_SUCCESS,
        payload : data
    }
}

const fetchCartListFaliure = (error) =>{
    return {
        type : FETCH_CART_DATA_FALIURE,
        payload : error
    }

}

//************ FETCH CART DATA ********//

//************ ADD CART DATA ********//

export const addCart = (productId,quantity) =>(dispatch)=>{
   return new Promise (async(resolve,reject)=>{
       dispatch(addCartRequest())
     try{ 
      const response = await commerce.cart.add(productId, quantity);
      const item = response.item
      if(response){
          dispatch(addCartSuccess(response))
          dispatch(fetchCart())
          //data added with two item
      }
          else{
            dispatch(addCartFaliure(response.message))
          }
      }
    catch(err){
    throw new Error(err)
    }

})
}

const addCartRequest=() =>{
    return {
        type : ADD_CART_DATA_REQUEST,
    };
};

const addCartSuccess = (data) =>{
    return {
        type :  ADD_CART_DATA_SUCCESS,
        payload : data
    }
}

const addCartFaliure = (error) =>{
    return {
        type :  ADD_CART_DATA_FALIURE,
        payload : error
    }

}



//************ ADD CART DATA ********//

//************ UPDATE CART DATA ********//

export const updateCart = (lineItemId, { quantity }) =>{
    return async(dispatch) =>{
        console.log(lineItemId, { quantity },"response to u[date")
        dispatch(updateCartListRequest())

        try{
            const response = await commerce.cart.update(lineItemId, { quantity })
            console.log(response,"response to u[date")
        

           if(response){
            dispatch(updateCartListSuccess(response))
            dispatch(fetchCart())
           }
           else{
            dispatch(updateCartListFaliure(response.message))
           }

        }
        catch(err){
            throw new Error(err)
        }
    }
}


const updateCartListRequest=() =>{
    return {
        type :  UPDATE_CART_DATA_REQUEST,
};
}

const updateCartListSuccess = (data) =>{
    return {
        type :  UPDATE_CART_DATA_SUCCESS,
        payload : data
    }
}

const updateCartListFaliure = (error) =>{
    return {
        type :  UPDATE_CART_DATA_FALIURE,
        payload : error
    }

}

//************ UPDATE CART DATA ********//


//************ DELETE CART DATA ********//


export const deleteCart = (lineItemId) =>{
    return async(dispatch) =>{
      
        dispatch(deleteCartListRequest())

        try{
            const response = await commerce.cart.remove(lineItemId);
            const item = response.cart
             console.log("kkeeeeeee",response)
           if(item){
            dispatch(deleteCartListSuccess(item))
            dispatch(fetchCart())
           }
           else{
            dispatch(deleteCartListFaliure(item.message))
           }

        }
        catch(err){
            throw new Error(err)
        }
    }
}


const deleteCartListRequest=() =>{
    return {
        type :  DELETE_CART_DATA_REQUEST,
};
}

const deleteCartListSuccess = (data) =>{
    return {
        type :  DELETE_CART_DATA_SUCCESS,
        payload : data
    }
}

const deleteCartListFaliure = (error) =>{
    return {
        type :  DELETE_CART_DATA_FALIURE,
        payload : error
    }

}

//************ DELETE CART DATA ********//


//************ DELETE CART DATA ********//

export const emptyCart = (lineItemId) =>{
    return async(dispatch) =>{
      
        dispatch(emptyCartListRequest())

        try{
            const response = await commerce.cart.empty();
           if(response){
            dispatch(emptyCartListSuccess(response))
            dispatch(fetchCart())
           }
           else{
            dispatch(emptyCartListFaliure(response.message))
           }

        }
        catch(err){
            throw new Error(err)
        }
    }
}


const emptyCartListRequest=() =>{
    return {
        type :  EMPTY_CART_DATA_REQUEST,
};
}

const emptyCartListSuccess = (data) =>{
    return {
        type :  EMPTY_CART_DATA_SUCCESS,
        payload : data
    }
}

const emptyCartListFaliure = (error) =>{
    return {
        type :  EMPTY_CART_DATA_FALIURE,
        payload : error
    }

}



//************ DELETE CART DATA ********//