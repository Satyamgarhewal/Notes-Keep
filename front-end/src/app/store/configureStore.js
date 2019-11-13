import {createStore, combineReducers} from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notesReducer from'../reducer/notesReducer'

const configureStore=()=>{
    const store =createStore(combineReducers({
        notes:notesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore