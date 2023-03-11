import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { MdFileCopy } from "react-icons/md";
import { useState } from "react";
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from "../Scripts/characters_lists.js";

const PasswordGenerator = (props) => {

    // * defining states here
    const [passwordLength , setPasswordLength] = useState(8);
    const [desirePassword, setDesirePassword] = useState("");
    const [number , setNumber] = useState(false);
    const [symbols ,setSymbols]  = useState(false);
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [button , setButton] = useState(false);

    //? making string and concatining all elements according to checked values
    const generatePassword=() => {
        let password_string = '';
        
        if (number) {
            password_string += numbers;
        }
        if (symbols) {
            password_string +=specialCharacters;
        }
        if (uppercase) {
            password_string +=upperCaseLetters;
        }
        if (lowercase) {
            password_string +=lowerCaseLetters;
        }
        return setDesirePassword(createPass(password_string));
    }

    const createPass=(password_string)=>{
        let random_pass="";
        for(let i=0;i < passwordLength;i++){
           const randomvalue= Math.floor(Math.random() * password_string.length)
           random_pass =random_pass + password_string.charAt(randomvalue)
       
        }
        return random_pass
       
        }
    
        

    //   console.log(desirePassword);



    return (
        <div className="container">
            <div className="card shadow ">
                <div className="card-body ms-5">
                    <div className="row">
                        <div className="col-8">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Random generated password will show here" aria-label="Password" defaultValue={desirePassword} aria-describedby="addon-wrapping"/>
                            </div>
                        </div>
                        <div className="col-2">
                        <button className="btn btn-success" onClick={(e)=>{
                            if (desirePassword.length > 0) {  //! this condition is checking when password is generated then change the button state
                                setButton(true)
                                // e.target.classList.remove('btn-success')
                                // e.target.classList.add('btn-info')
                                navigator.clipboard.writeText(desirePassword) //! this code is coping text to clipboard
                                setTimeout(()=>{
                                    setButton(false)
                                    // e.target.classList.remove('btn-info')
                                    // e.target.classList.add('btn-success')
                                },1000)
                                }else{
                                    alert('cannot copy because you have not yet created password and Password Filed is empty');
                                }
                            }
                            }>{ (button) ? <MdFileCopy/> : 'Copy' } </button>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={number}  onChange={(e)=>{setNumber(e.target.checked)}} id="Numbers"/>
                                <label className="form-check-label" htmlFor="Numbers">
                                    Numbers
                                </label>
                            </div>
                        </div>
                        <div className="col-2">
                            <input type="number" className="form-control" defaultValue={passwordLength} onChange={(e)=>{setPasswordLength(e.target.value)}} placeholder="Enter Length" aria-label="Enter Length" aria-describedby="addon-wrapping" max={15} min={8} />
                        </div>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" checked={symbols} onChange={(e)=>setSymbols(e.target.checked)} id="Symbols" />
                        <label className="form-check-label" htmlFor="Symbols">
                            Symbols
                        </label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="UPPERCASE" checked={uppercase} onChange={(e)=>{setUppercase(e.target.checked)}} />
                        <label className="form-check-label" htmlFor="UPPERCASE">
                            UPPERCASE
                        </label>
                    </div>
                    <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="lowercase" checked={lowercase} onChange={(e)=>{setLowercase(e.target.checked)}}/>
                        <label className="form-check-label" htmlFor="lowercase">
                            lowercase
                        </label>
                    </div>
                </div>
                <div className="text-center">
                <button className="btn btn-success" onClick={generatePassword}>Generate Password</button>
                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;