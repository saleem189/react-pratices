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
       <div className='mt-4 container'>
       <PasswordGenerator />
       </div>
    </div>
  );
}

export default App;


/**
 * ! this is an example how to pass states from parent to child components and child can access of parent states
 * ! and change parent states within child component
 * ! this is also called component Drilling
 * */ 


// function App() {

//   const [Password, setPassword] = useState("")
//   const [Passlength, setPasslength] = useState(8)
//   const [Uppercase, setUppercase] = useState(false)
//   const [Lowercase, setLowercase] = useState(false)
//   const [Number, setNumber] = useState(false)
//   const [Symbols, setSymbols] = useState(false)
//   const [Copied, setCopied] = useState(false)

//   return (
//     <div className="App">
//     <PasswordGenerator Password={Password} setPassword={setPassword}
//     Passlength={Passlength} setPasslength={setPasslength}
//     Uppercase={Uppercase} setUppercase={setUppercase}
//     Lowercase={Lowercase} setLowercase={setLowercase}
//     Number={Number} setNumber={setNumber}
//     Symbols={Symbols} setSymbols={setSymbols}
//     Copied={Copied} setCopied={setCopied}/>

     
//     </div>
//   );
// }