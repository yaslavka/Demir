import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appReducer from "./app.reducer";
import authReducer from "./auth.reducer";

// TODO: refactoring

const rootReducer =(history) => combineReducers({
    app: appReducer,
    auth: authReducer,
    router: connectRouter(history),
})
export default rootReducer
