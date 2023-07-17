import { combineReducers } from "redux";

import bookDataReducer from "./bookDataReducer";
import cartDataReducer from "./cartDataReducer";

export const rootReducer = combineReducers({
    bookList: bookDataReducer,
    cartList : cartDataReducer
    
})

// export default rootReducer;