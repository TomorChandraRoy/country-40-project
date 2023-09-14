import CountryData from "./Countrydata/CountryData";

const CountryDetalis = ({ country1, country2, country3}) => {
    console.log(country1);
    console.log(country2);
    console.log(country3);
    return (
        <div>
            {country1.name.common}
            {country2}
            {country3}
            <CountryData
                country4={country1}
                country5={country2}
                country6={country3}
            ></CountryData>
        </div>
    );
};

export default CountryDetalis;