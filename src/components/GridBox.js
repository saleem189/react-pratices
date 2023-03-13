const GridBox = () =>{
    const styles = {
        'width':'10rem',
        'height':'5rem',
        'border':'1px solid',
        'backgroundColor':'#f8f9fa'
    }
    const handleBox =(e)=>{
        e.target.style.backgroundColor = 'red';
    }
return (
    <div style={styles} onClick={handleBox} >
        
    </div>
    )
}

export default GridBox;