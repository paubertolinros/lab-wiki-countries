import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({countries}) => {
  const [foundCountry, setFoundCountry] = useState(null);
  const { countryAlphaCode } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const country = countries.find((oneCountry) => oneCountry.alpha3Code == countryAlphaCode);
    if (country) {
      setFoundCountry(country);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  }, [countryAlphaCode])
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && foundCountry && 
        <div className="col-7">
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={`${foundCountry.name.common} flag`} />
          <h1>{foundCountry.name.common}</h1>
          <table className="table">
              <thead></thead>
              <tbody>
                <tr>
              <td style={{ width: "30%"}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                  {foundCountry.borders.length === 0 ? <p> This country has no borders.</p>: foundCountry.borders.map((elem, i) => {
                    return (
                      <li key={i}><Link to={`/${elem}`}>{elem}</Link></li>
                    )
                  })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>       
      }
      {error && <p>Something went wrong!</p>}
   </div>         
  )
}     
export default CountryDetails;
