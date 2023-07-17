  //This page contain the Action's for Product data for the Redux state function calling

import {
    FETCH_BOOK_DATA_REQUEST,
    FETCH_BOOK_DATA_SUCCESS,
    FETCH_BOOK_DATA_FALIURE,

    FETCH_BOOK_DATA_BY_ID_REQUEST,
    FETCH_BOOK_DATA_BY_ID_SUCCESS,
    FETCH_BOOK_DATA_BY_ID_FALIURE
} from "../../redux/type"
import { commerce } from "../../lib/commerce"

//********* FETCH BOOK DATA ********* //

export const fetchProduct = () =>{
    return async(dispatch) =>{
      dispatch(fetchBookListRequest());
      try{     
        const response = await commerce.products.list();
        const data1 = response.data;
        if(data1){
           dispatch(fetchBookListSuccess(response))
        }
        else{
            dispatch(fetchBookListFaliure(response.message))
        }
      }
      catch(err){
        // dispatch(fetchBookListFaliure(response.message))
        throw new Error(err)
      }
        
    }
}


const fetchBookListRequest=() =>{
    return {
        type : FETCH_BOOK_DATA_REQUEST
    };
};

const fetchBookListSuccess = (data) =>{
    return {
        type : FETCH_BOOK_DATA_SUCCESS,
        payload : data
    }
}

const fetchBookListFaliure = (error) =>{
    return {
        type : FETCH_BOOK_DATA_FALIURE,
        payload : error
    }

}

//********* FETCH BOOK DATA ********* //



//********* FETCH DATA BY ID ********* //

export const fetchProductById = (id) =>{
    return async(dispatch) =>{
        dispatch( fetchBookListByIdRequest());
        try{     
          const response =  await commerce.products.retrieve(id);
          const data1 = response.data;
          if(data1){
             dispatch(fetchBookListByIdSuccess(response))
          }
          else{
              dispatch(fetchBookListByIdFaliure(response.message))
          }
        }
        catch(err){
          throw new Error(err)
        }
          
      }
}




const fetchBookListByIdRequest=() =>{
    return {
        type : FETCH_BOOK_DATA_BY_ID_REQUEST
    };
};

const fetchBookListByIdSuccess = (data) =>{
    return {
        type : FETCH_BOOK_DATA_BY_ID_SUCCESS,
        payload : data
    }
}

const fetchBookListByIdFaliure = (error) =>{
    return {
        type : FETCH_BOOK_DATA_BY_ID_FALIURE,
        payload : error
    }

}



//********* FETCH DATA BY ID ********* //
