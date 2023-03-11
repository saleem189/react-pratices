const Country =({ country, population, maxPopulation } ) =>{
    // const findPercent = (population / 7693165599) * 100; // * Calculate percentage with static MaxPopulation
    const findPercent = (population / maxPopulation) * 100; // ? Calculate percentage with Dynamic MaxPopulation  (generic way)
    const styles = {
       width: `${findPercent}%`
    };
return ( 
        <div className="row">
            <div className="col align-self-end">
            <p className="lead">
                {country}
            </p>
            </div>
            <div className="col align-self-center">
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Basic example" aria-valuenow={findPercent} style={styles}  aria-valuemax="100" ></div>
                </div>
            </div>
            <div className="col align-self-start">
            <p className="lead">
                {population}
            </p>
            </div>
        </div>
   
)
};

export default Country;