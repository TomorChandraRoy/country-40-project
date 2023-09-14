
const CountryData = (props) => {
    const{country4,country5,country6} =props
    return (
        <div>
            <hr />
            <p>{country4.name.common}</p>
        </div>
    );
};

export default CountryData;