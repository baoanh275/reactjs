
import {BrowserRouter as Router } from 'react-router-dom'

import DataProvider from './components/DataProvider'

import PrivateRoute from './components/routes/PrivateRoute'



function App() {
  
  return ( 
    <DataProvider>
      <Router>

        <PrivateRoute/>
        
      </Router>
 

       
    </DataProvider>
   
  );
}

export default App;
