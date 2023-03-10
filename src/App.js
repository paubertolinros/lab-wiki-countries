import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Routes, Route} from 'react-router-dom'

function App() {
 
  const [countries, setCountries] = useState([])

   useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data)
      })
      .catch(error => {
       console.log(error)
     })
   }, [])
  
  return (
    <div className="App">
      <Navbar />
       <div className="container">
    <div className="row">
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />}>
            <Route path="/:countryAlphaCode" element={<CountryDetails countries={countries} />} />
        </Route>
      </Routes>
      </div>
      </div>
      </div>

  );
}

export default App;
