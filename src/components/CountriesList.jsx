import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const CountriesList = ({countries}) => {
  const [countriesL, setCountriesL] = useState([]);

  useEffect(() => {
    setCountriesL(countries)
  }, [countries])

  return (
  <div className="col-90">
    <section className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }} >
      <div className="list-group">
        {countriesL.map((elem, i) => {
          return (
           <Link to={`/${elem.alpha3Code}`} key={i} className="list-group-item list-group-item-action"
            >{<img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt={`${elem.name.common} flag`} />} {elem.name.common} </Link> 
        )
         })}  
      </div>
    </section>
    <div>
      <Outlet />
    </div>
  </div>
  )
}     
export default CountriesList;




