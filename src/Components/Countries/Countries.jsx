import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "../Country/SingleCountry";
import './Contries.css'
const Countries = () => {
    const[countries, setCountries] = useState([]);

        // make button
    const [visitedCountry, setvisitedCountry] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])

    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry =(singleCountry1) =>{
        const newCountry = [...visitedCountry, singleCountry1]
        setvisitedCountry(newCountry)
    }

    const handleVisitedCountry2 = (singleCountryFlages) =>{
        const newflag = [...visitedFlag, singleCountryFlages]
        setVisitedFlag(newflag)
    }
  //  console.log(countries);


    return (
        <div >
            <h3>All Countries: {countries.length}</h3>

             {/* make button */}
            <div>
              <h5>visited Country map : {visitedCountry.length}</h5>
               <ul>
                    {
                        visitedCountry.map(singleFlag =>

                        <li key={singleFlag.cca3}>
                            {singleFlag.name.common}
                        </li>)
                           
                    }
               </ul>
            </div>
            {/* show flags */}
            <div className="show-flages">
                {
                    visitedFlag.map((flages, idx) => <img src={flages} key={idx}></img>)
                }
            </div>

            <div className="countryes">
            {
                countries.map(allCountry => <SingleCountry 
                     singleCountry1 ={allCountry} 
                     handleVisitedCountry1={handleVisitedCountry} 
                     handleVisitedCountry3 ={handleVisitedCountry2}  
                     key={allCountry.cca3}></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Countries;