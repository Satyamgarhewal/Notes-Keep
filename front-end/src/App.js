import React from 'react';
import './App.css';
import {BrowserRouter, Link , Route, Switch} from 'react-router-dom'

import Registeration from './app/components/Registration/registeration'
import Login from '../src/app/components/Login/login'
import NotesShow from '../src/app/components/Notes/notes'
import AddNote from '../src/app/components/Notes/Addnote'
import Loading from '../src/app/components/Login/loading'

function App() {
  return (
   <div>
<BrowserRouter>
<Switch>
    <Route path = '/' component ={Registeration} exact ={true}/>
    <Route path = '/login' component ={Login}/>
    <Route path = '/notes' component={NotesShow} />
    <Route path  ='/addNote' component ={AddNote} />
    <Route path = '/loading' component= {Loading} />
    </Switch>
</BrowserRouter>

   </div> 
  )
}

export default App;
