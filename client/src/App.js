import './App.css'
import { Route,Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login&Registration/Login/Login"
import Register from "./components/Login&Registration/Registration/Registration"
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRouting/PrivateRoute';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});


function App() {
  const [email_id,setEmail_id]=useState('');
  const isAuthenticated=localStorage.getItem("authentication");
  if(!isAuthenticated){
  localStorage.setItem("authentication","false");
  }

  return (
    <ApolloProvider client={client}>
    <div data-cursor-exclusion style={{backgroundColor: '#fff'}} data-cursor-size="20px"  className="App">
      <Cursor isGelly={true} />
      <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path="/login"  element={<Login email_id={email_id} setEmail_id={setEmail_id}/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path='/user' element={<PrivateRoute />}>
        <Route path="dashboard/*"  element={<Dashboard email_id={email_id} />}></Route>
        </Route>
      </Routes>
    </div>
    </ApolloProvider>
  );
}

export default App;
