import './App.css';
import {tenHighestPopulation} from "./Scripts/ten_most_highest_populations.js";
import {countriesData} from "./Scripts/countries.js";
import CountryList from "./components/CountryList.js";
import CountryFlag from "./components/CountryFlag";
import PasswordGenerator from './components/PasswordGenerator';
import AxiosUseEffect from './components/useEffect_axios.js';
import Events from './components/Events';
import MouseGrid from './components/MouseGrid';

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

       <AxiosUseEffect/>


       <div className="mt-5 mb-5">
        <Events/>
       </div>
       <div className="mt-5 mb-5">
        <MouseGrid/>
       </div>
    </div>
  );
}

export default App;


/**
 * ! this is an example how to pass states from parent to child components and child can have access of parent states
 * ! and change parent states within child component
 * ! this is also called component Drilling
 * !states are always sent form parent to child
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