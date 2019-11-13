import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from '../src/app/store/configureStore'
import {Provider} from 'react-redux'
import {settingNotes} from '../src/app/action/notesAction'

const store = configureStore()
console.log('getting state',store.getState())
// store.subscribe(()=>{
//     console.log(store.getState())
// })

// store.dispatch(startSetNotes())
if(localStorage.getItem('token')){
    store.dispatch(settingNotes())
}

const ele =(
    <Provider store ={store}>
        <App />
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));
