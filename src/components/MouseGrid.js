import { useState } from "react";
import GridBox from "./GridBox";

const MouseGrid = () => {

    const [rowlength, setRowLength] = useState('');
    const [columnlength, setColumnLength] = useState('');
    const [divState, setDivState] = useState('')

    const handleGrid =() =>{
        let show_row_div=[];
        let show_column_div=[];
        let col_key = 0;
        for (let index = 0; index < rowlength; index++){
            for (let col = 0; col < columnlength; col++) {
                show_column_div.push(<div className="col" key={col_key++} > <GridBox/></div>);
            }
           show_row_div.push(<div className="row" key={'row_'+index}>{show_column_div}</div>);
           show_column_div=[]; 
        }
        setDivState(show_row_div); 
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="row">
                    Enter lenth of Rows
                </label>
                <input defaultValue={rowlength} type="number" name="row" onChange={(e)=>{setRowLength(e.target.value)}}></input>
            </div>
            <div className="form-group">
            <label htmlFor="column">
                    Enter lenth of Columns
                </label>
                <input defaultValue={columnlength} type="number" name="column" onChange={(e)=>{setColumnLength(e.target.value)}}></input>
            </div>

            <button onClick={handleGrid}> generate Grid</button>
            <div className="container">
                <div className="text-center">
                    {divState}
                </div> 
            </div>
        </>
    );
}

export default MouseGrid;