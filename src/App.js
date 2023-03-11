import './App.css';
import {tenHighestPopulation} from "./Scripts/ten_most_highest_populations.js";
import {countriesData} from "./Scripts/countries.js";
import CountryList from "./components/CountryList.js";
import CountryFlag from "./components/CountryFlag";
import PasswordGenerator from './components/PasswordGenerator';

function App() {
  return (
    <div className="flex-container">
        {/* calling CountryList Component Here */}
       {/* <CountryList data = {tenHighestPopulation} /> */}
       <div className='mt-4 container'>
        <CountryFlag countriesList = {countriesData} />
       </div>
       <PasswordGenerator />
       <div className='mt-4 container'>
        <CountryFlag countriesList = {countriesData} />
       </div>
    </div>
  );
}

export default App;
