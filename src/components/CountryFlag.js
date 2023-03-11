import { useState } from "react";
import CountryCard from "./CountryCard";

const CountryFlag = (props) => {
    const [selectedCountry, setSelectedCountry] = useState(() => getRandomCountry(props.countriesList));
    
    const handleGenerateAgain = () => {
        setSelectedCountry(getRandomCountry(props.countriesList));
    };


    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-success" onClick={handleGenerateAgain}> Generate Again</button>
            </div>
            <div className="col">
                <p className="text-center" id="country_heading">First Automatic Generated Country</p>
               <CountryCard flag={selectedCountry.flag} name={selectedCountry.name} capital={selectedCountry.capital} population={selectedCountry.population} currency={selectedCountry.currency} languages = {selectedCountry.languages} />
            </div>
        </div>
    );

};

const getRandomCountry = (countriesList) => {
    let randomIndex =  Math.floor(Math.random()* countriesList.length);
    return countriesList[randomIndex];
}
export default CountryFlag;