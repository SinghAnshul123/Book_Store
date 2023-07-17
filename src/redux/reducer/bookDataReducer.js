import {
    FETCH_BOOK_DATA_REQUEST,
    FETCH_BOOK_DATA_SUCCESS,
    FETCH_BOOK_DATA_FALIURE,

    FETCH_BOOK_DATA_BY_ID_REQUEST,
    FETCH_BOOK_DATA_BY_ID_SUCCESS,
    FETCH_BOOK_DATA_BY_ID_FALIURE
} from "../../redux/type"



const initialState = {
    bookList : [],
    bookListById : [],
    bookCount : 0,
    isLoading : false,
    isLoadingById : false,
    message : ""
}

const bookDataReducer = (state = initialState,action) => {
    switch (action.type){
        case FETCH_BOOK_DATA_REQUEST :
            return{
                ...state,
                isLoading : true,
            }

            case  FETCH_BOOK_DATA_SUCCESS :
                return{
                    ...state,
                    isLoading : false,
                    bookList : action.payload,
                }

                case  FETCH_BOOK_DATA_FALIURE :
                return{
                    ...state,
                    isLoading : false,
                    message : action.payload,
                }

                case  FETCH_BOOK_DATA_BY_ID_REQUEST :
                    return{
                        ...state,
                        isLoadingById : true,
                       
                    }

                    case  FETCH_BOOK_DATA_BY_ID_SUCCESS :
                    return{
                        ...state,
                        isLoadingById : false,
                        bookListById : action.payload
                       
                    }

                    case  FETCH_BOOK_DATA_BY_ID_FALIURE :
                        return{
                            ...state,
                            isLoadingById : false,
                            message : action.payload
                           
                        }

                        default :
                         return state
    }






}

export default bookDataReducer;