import React from 'react';
import LoginPage from './login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashbord from './Dashbord';

function App() {

 return(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/Dashbord" element={<Dashbord/>}/>
        </Routes>
    </BrowserRouter>
 )
}

export default App;
