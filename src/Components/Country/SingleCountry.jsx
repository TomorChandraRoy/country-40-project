import { useState } from 'react';
import './SingleCountry.css'
import CountryDetalis from '../CountryDetils/CountryDetalis';


const SingleCountry = ({singleCountry1, handleVisitedCountry1, handleVisitedCountry3}) => {
    // console.log(singleCountry1);

    // distaring korci👇
    const {name,flags,continents,cca2} = singleCountry1;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // ata 2 vabe kora jay
        setVisited(true)
        // defult vabe 👇 kintu visited aer manta false ace !visited mane false maneta ke true kore dibe 
        setVisited(!visited)
        
    }

    return (
        <div className={`Country  ${visited &&'visitedBG'} }`}>
            <h3 style={{color: visited ? 'red' : 'purple'}}>Name : {name?.common}</h3>
            <p>{name.official}</p>
            <h5>Country Name : {continents}</h5>
            <img src={flags.png} alt="" />
            <p><small>{cca2}</small></p>

            <button onClick={()=>handleVisitedCountry1(singleCountry1)} className='btn2'>Marke Country</button>
            <br />

            <button onClick={()=>handleVisitedCountry3(singleCountry1.flags.png)} className='btn3'>AddFlags</button>

            <button onClick={handleVisited} className='btn'>{visited ? 'visited' : 'visit'} </button>

            {/* ata 2 👇 vabe kora jay */}
            {/* {visited && 'visited you this country'} */}
            {visited ? 'visited you this country' : 'i wany to visitd'}

            <hr />
            <CountryDetalis
                country1={singleCountry1}
                country2= {handleVisitedCountry1}
                country3={handleVisitedCountry3}
            ></CountryDetalis>
        </div>
    );
};

export default SingleCountry;